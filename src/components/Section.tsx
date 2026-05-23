import { useEffect, useState, useRef } from 'react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-20 ${className}`}
    >
      <div className={`section-fade ${visible ? 'visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
