import { useRef, useEffect, type ReactNode } from 'react';

interface ShutterRevealProps {
  children: ReactNode;
  className?: string;
  sliceCount?: number;
  duration?: number;
  stagger?: number;
}

export default function ShutterReveal({
  children,
  className = '',
  sliceCount = 8,
  duration = 1.2,
  stagger = 0.06,
}: ShutterRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const slicesRef = useRef<HTMLDivElement[]>([]);
  const revealedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const slices = slicesRef.current;
    if (!container || slices.length === 0 || revealedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealedRef.current) {
          revealedRef.current = true;

          // Animate each shutter slice open
          slices.forEach((slice, i) => {
            const delay = i * stagger;
            slice.style.transition = `clip-path ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`;
            slice.style.clipPath = 'inset(0 0% 0 100%)';
          });

          observer.unobserve(container);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [duration, stagger]);

  const setSliceRef = (el: HTMLDivElement | null, index: number) => {
    if (el) slicesRef.current[index] = el;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Shutter layers */}
      <div className="absolute inset-0 flex" style={{ pointerEvents: 'none' }}>
        {Array.from({ length: sliceCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => setSliceRef(el, i)}
            className="h-full flex-shrink-0"
            style={{
              width: `${100 / sliceCount}%`,
              clipPath: 'inset(0 0% 0 0%)',
              background: 'linear-gradient(180deg, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.04) 100%)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </div>
  );
}
