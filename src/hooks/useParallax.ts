import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement>(options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'up', disabled = false } = options;
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is through the viewport
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      if (progress >= 0 && progress <= 1) {
        const newOffset = (progress - 0.5) * speed * 100;
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, disabled]);

  const getTransform = () => {
    if (disabled) return {};
    
    switch (direction) {
      case 'up':
        return { transform: `translateY(${-offset}px)` };
      case 'down':
        return { transform: `translateY(${offset}px)` };
      case 'left':
        return { transform: `translateX(${-offset}px)` };
      case 'right':
        return { transform: `translateX(${offset}px)` };
      default:
        return { transform: `translateY(${-offset}px)` };
    }
  };

  return { ref, offset, style: getTransform() };
}

// Hook for mouse-based parallax (for desktop)
export function useMouseParallax<T extends HTMLElement>(intensity: number = 20) {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = ((e.clientX - centerX) / window.innerWidth) * intensity;
      const y = ((e.clientY - centerY) / window.innerHeight) * intensity;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return { ref, position };
}

// Hook for scroll progress
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

// Hook for intersection observer (trigger animations)
interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement>(options: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView, hasAnimated };
}
