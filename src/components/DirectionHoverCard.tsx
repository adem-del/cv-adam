import { useRef, type ReactNode, type MouseEvent } from 'react';
import gsap from 'gsap';

interface DirectionHoverCardProps {
  children: ReactNode;
  overlayContent?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

type Direction = 'top' | 'right' | 'bottom' | 'left';

export default function DirectionHoverCard({
  children,
  overlayContent,
  className = '',
  href,
  target,
  rel,
}: DirectionHoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const getDirection = (e: MouseEvent<HTMLDivElement>): Direction => {
    const el = cardRef.current;
    if (!el) return 'top';
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    if (angle < 45 && angle >= -45) return 'right';
    if (angle >= 45 && angle < 135) return 'bottom';
    if (angle >= -135 && angle < -45) return 'top';
    return 'left';
  };

  const getClipPath = (dir: Direction): string => {
    switch (dir) {
      case 'top': return 'inset(100% 0 0 0)';
      case 'right': return 'inset(0 0 0 100%)';
      case 'bottom': return 'inset(0 0 100% 0)';
      case 'left': return 'inset(0 100% 0 0)';
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    const overlay = overlayRef.current;
    if (!overlay) return;
    gsap.set(overlay, { clipPath: getClipPath(dir) });
    gsap.to(overlay, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const dir = getDirection(e);
    const overlay = overlayRef.current;
    if (!overlay) return;
    gsap.to(overlay, {
      clipPath: getClipPath(dir),
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target, rel, className: `block h-full ${className}` }
    : { className: `block h-full ${className}` };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <Wrapper {...wrapperProps}>
        <div className="relative z-10 h-full">{children}</div>
      </Wrapper>

      {/* Direction-aware overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-20 flex items-center justify-center bg-accent/90 dark:bg-accent/80 backdrop-blur-sm"
        style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      >
        {overlayContent || (
          <span className="text-white font-medium flex items-center gap-2">
            Ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
