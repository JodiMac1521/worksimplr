'use client';
import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className, style, delay = 0, id }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: 0,
        transform: 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
