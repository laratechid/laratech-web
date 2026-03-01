import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
}: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const countRef = useRef(start);
  const rafRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const startTime = performance.now() + delay;
    const diff = end - start;

    const animate = (currentTime: number) => {
      if (currentTime < startTime) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + diff * easeOut);
      
      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [isAnimating, start, end, duration, delay]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const formattedValue = `${prefix}${count}${suffix}`;

  return { count, formattedValue, startAnimation, isAnimating };
}

// Hook for counting when element comes into view
export function useCountOnView<T extends HTMLElement>(options: UseCounterOptions) {
  const ref = useRef<T>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const counter = useCounter(options);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          counter.startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted, counter]);

  return { ref, ...counter, hasStarted };
}
