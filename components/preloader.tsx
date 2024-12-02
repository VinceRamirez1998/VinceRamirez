'use client'; // Mark as client component

import { useEffect, useState } from 'react';
import '../src/app/preloader.css';  // Correct path to preloader.css inside src/app/

interface PreloaderProps {
  className?: string;  // Allow className as a prop
}

const Preloader: React.FC<PreloaderProps> = ({ className }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 3 seconds
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Remove preloader once loading is complete

  return (
    <div className={`loading ${className}`}>
      <div className="loading-text">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
