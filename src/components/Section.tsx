import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function Section({ id, title, children, className = '', alt = false }: SectionProps) {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 ${alt ? 'bg-surface dark:bg-slate-900/40' : ''} ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-section ${visible ? 'visible' : ''}`}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-balance">
              {title}
            </h2>
            <div className="mt-3 w-12 h-1 rounded-full bg-gradient-to-r from-accent to-accent-light" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
