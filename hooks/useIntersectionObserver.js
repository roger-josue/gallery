'use client'
import { useState, useEffect } from 'react';

export function useIntersectionObserver(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin:'40%',
        threshold: 0.4
      });
    observer.observe(div);
    return () => {
      observer.disconnect();
    }
  }, [ref]);

  return isIntersecting;
}