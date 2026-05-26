import { useEffect, useRef } from 'react';

/**
 * CSS-based pixel transition overlay.
 * When triggered, it creates a pixelation dissolve effect between sections.
 */
export default function PixelTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleSectionEnter = (e: Event) => {
      const section = e.target as HTMLElement;
      if (!section) return;

      // Trigger pixel transition
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');

      setTimeout(() => {
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
      }, 400);
    };

    // Observe all sections for intersection
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleSectionEnter({ target: entry.target } as unknown as Event);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 pointer-events-none transition-all duration-500 opacity-0"
      style={{
        backdropFilter: 'url(#pixelate)',
        background: 'rgba(99, 102, 241, 0.03)',
      }}
    >
      {/* SVG filter for pixelation effect */}
      <svg className="absolute w-0 h-0">
        <filter id="pixelate">
          <feFlood x="0" y="0" width="2" height="2" />
          <feComposite width="4" height="4" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius="2" />
        </filter>
      </svg>

      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(0deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '8px 8px',
        }}
      />
    </div>
  );
}
