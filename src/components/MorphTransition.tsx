import { useEffect, useRef } from 'react';

/**
 * Smooth morphing blob transition.
 * When scrolling between sections, organic gradient blobs
 * bloom and fade for a subtle, elegant transition.
 */
export default function MorphTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<string>('');
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Define section-based blob colors/positions
    const sectionStyles: Record<string, { colors: string[]; positions: string[] }> = {
      about: {
        colors: ['#6366f1', '#8b5cf6', '#a78bfa'],
        positions: ['20% 30%', '70% 60%', '40% 80%'],
      },
      education: {
        colors: ['#3b82f6', '#60a5fa', '#93c5fd'],
        positions: ['80% 20%', '30% 70%', '60% 40%'],
      },
      experience: {
        colors: ['#06b6d4', '#22d3ee', '#67e8f9'],
        positions: ['40% 10%', '70% 80%', '20% 50%'],
      },
      projects: {
        colors: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
        positions: ['60% 20%', '20% 70%', '80% 40%'],
      },
      skills: {
        colors: ['#6366f1', '#818cf8', '#a5b4fc'],
        positions: ['30% 40%', '70% 30%', '50% 80%'],
      },
      contact: {
        colors: ['#4f46e5', '#6366f1', '#818cf8'],
        positions: ['50% 10%', '80% 60%', '30% 80%'],
      },
    };

    const getSectionId = (el: Element): string => {
      const section = el.closest('section[id]');
      return section?.getAttribute('id') || '';
    };

    const triggerTransition = (sectionId: string) => {
      if (sectionId === currentSectionRef.current) return;
      currentSectionRef.current = sectionId;

      const style = sectionStyles[sectionId] || sectionStyles.about!;
      const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current];

      blobs.forEach((blob, i) => {
        if (!blob) return;
        const color = style.colors[i] || style.colors[0]!;
        const pos = style.positions[i] || style.positions[0]!;

        // Reset
        blob.style.transition = 'none';
        blob.style.opacity = '0';
        blob.style.transform = 'scale(0.3)';
        blob.style.background = `radial-gradient(circle at center, ${color} 0%, transparent 70%)`;

        // Force reflow
        void blob.offsetHeight;

        // Animate in
        blob.style.transition = `all 1.2s cubic-bezier(0.16, 1, 0.3, 1)`;
        blob.style.opacity = '0.15';
        blob.style.transform = 'scale(1)';
        blob.style.left = pos.split(' ')[0] || '50%';
        blob.style.top = pos.split(' ')[1] || '50%';
      });

      // Clear previous timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Fade out after 1.5s
      timeoutRef.current = setTimeout(() => {
        blobs.forEach((blob) => {
          if (!blob) return;
          blob.style.transition = 'opacity 0.8s ease';
          blob.style.opacity = '0';
        });
      }, 1500);
    };

    // Observe section intersections
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const id = getSectionId(entry.target);
            if (id) triggerTransition(id);
          }
        }
      },
      { threshold: [0.3, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));

    // Trigger initial section
    for (const s of sections) {
      const rect = s.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.4 && rect.bottom > 0) {
        const id = getSectionId(s);
        if (id) triggerTransition(id);
        break;
      }
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Blob 1 */}
      <div
        ref={blob1Ref}
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'scale(0.3)',
          opacity: 0,
          filter: 'blur(60px)',
          willChange: 'transform, opacity',
          transition: 'none',
        }}
      />
      {/* Blob 2 */}
      <div
        ref={blob2Ref}
        className="absolute w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'scale(0.3)',
          opacity: 0,
          filter: 'blur(80px)',
          willChange: 'transform, opacity',
          transition: 'none',
        }}
      />
      {/* Blob 3 */}
      <div
        ref={blob3Ref}
        className="absolute w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'scale(0.3)',
          opacity: 0,
          filter: 'blur(100px)',
          willChange: 'transform, opacity',
          transition: 'none',
        }}
      />
    </div>
  );
}
