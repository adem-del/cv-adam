import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}
const SECTION_NUMBERS: Record<string, string> = {
  about: '01',
  education: '02',
  experience: '03',
  projects: '04',
  skills: '05',
  contact: '06',
};

export default function Section({ id, title, children, className = '', alt = false }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Animate the line: 0 → 48px over 800ms
          const start = performance.now();
          const animate = (now: number) => {
            const t = Math.min((now - start) / 800, 1);
            // cubic-bezier(0.16, 1, 0.3, 1) approximation
            const eased = 1 - Math.pow(1 - t, 3);
            setLineWidth(eased * 48);
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sectionNum = SECTION_NUMBERS[id] || '';

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 relative ${alt ? 'bg-surface dark:bg-slate-900/40' : ''} ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          {/* Section number + title row */}
          <div className={`flex items-start gap-4 transition-all duration-700 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Number badge */}
            <span className="hidden sm:block text-[clamp(3rem,6vw,5rem)] font-bold leading-none tracking-tighter
              bg-gradient-to-b from-accent/20 to-transparent bg-clip-text text-transparent select-none">
              {sectionNum}
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-balance">
                {title}
              </h2>
              {/* Animated underline */}
              <div className="relative h-1 mt-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-accent-light"
                  style={{ width: `${lineWidth}px` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-700 delay-200 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
