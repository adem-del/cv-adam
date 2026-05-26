import { useRef, useEffect, type ReactNode } from 'react';

interface ShutterRevealProps {
  children: ReactNode;
  id?: string;
  className?: string;
  sliceCount?: number;
  duration?: number;
  stagger?: number;
}

/**
 * Shutter Scroll Reveal
 *
 * When a section scrolls into view, vertical shutters (slices) animate
 * from closed → open, revealing the content beneath. Like venetian blinds.
 *
 * Each slice uses clip-path to animate from fully covering its column
 * (inset 0 99% 0 0 → inset 0 0% 0 0) — left to right reveal.
 */
export default function ShutterReveal({
  children,
  id,
  className = '',
  sliceCount = 10,
  duration = 1.0,
  stagger = 0.04,
}: ShutterRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealedRef = useRef(false);
  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || revealedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealedRef.current) {
          revealedRef.current = true;

          // Animate each shutter: closed → open (left to right)
          slicesRef.current.forEach((slice, i) => {
            if (!slice) return;
            const delay = i * stagger;
            // Start closed (clipped to 0 width), animate to open (100% width)
            slice.style.transition = `clip-path ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s`;
            slice.style.clipPath = 'inset(0 0% 0 0)';
          });

          observer.unobserve(container);
        }
      },
      { threshold: 0.15 }
    );

    // Initialize all slices as closed (clipped)
    slicesRef.current.forEach((slice) => {
      if (slice) slice.style.clipPath = 'inset(0 99% 0 0)';
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [duration, stagger]);

  return (
    <div ref={containerRef} id={id} className={`relative ${className}`}>
      {/* Shutter overlay */}
      <div
        className="absolute inset-0 z-20 flex pointer-events-none"
        style={{ perspective: '1200px' }}
      >
        {Array.from({ length: sliceCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { slicesRef.current[i] = el; }}
            className="h-full origin-left"
            style={{
              width: `${100 / sliceCount}%`,
              clipPath: 'inset(0 99% 0 0)',
              background: `linear-gradient(
                135deg,
                rgba(99, 102, 241, ${0.06 + (i / sliceCount) * 0.04}) 0%,
                rgba(99, 102, 241, ${0.02 + ((sliceCount - i) / sliceCount) * 0.03}) 50%,
                transparent 100%
              )`,
              willChange: 'clip-path',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
