import { useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/sections/Hero';
import TrustBar from '@/sections/TrustBar';
import TentangKami from '@/sections/TentangKami';
import Layanan from '@/sections/Layanan';
import Portofolio from '@/sections/Portofolio';
import Teknologi from '@/sections/Teknologi';
import Testimoni from '@/sections/Testimoni';
import Kontak from '@/sections/Kontak';
import Footer from '@/sections/Footer';
import './App.css';

function App() {
  // Smooth scroll polyfill for older browsers
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    // Add loaded class for initial animations
    document.body.classList.add('loaded');

    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070A12]">
      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* Trust Bar with Counters */}
        <TrustBar />
        
        {/* About Section */}
        <TentangKami />
        
        {/* Services Section */}
        <Layanan />
        
        {/* Portfolio Section */}
        {/* <Portofolio /> */}
        
        {/* Technologies Section */}
        <Teknologi />
        
        {/* Testimonials Section */}
        {/* <Testimoni /> */}
        
        {/* Contact Section */}
        <Kontak />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
