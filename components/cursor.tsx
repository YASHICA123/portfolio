'use client';

import { useState, useEffect } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

interface CursorState {
  isVisible: boolean;
  isHoveringInteractive: boolean;
  text: string;
  targetX: number;
  targetY: number;
}

export function Cursor() {
  const mousePosition = useMousePosition();
  const [cursorState, setCursorState] = useState<CursorState>({
    isVisible: false,
    isHoveringInteractive: false,
    text: '',
    targetX: 0,
    targetY: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkMobile = () => {
      setIsMobile(
        () =>
          !!(
            typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
              (navigator as any).maxTouchPoints > 0 ||
              (navigator as any).msMaxTouchPoints > 0)
          )
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setCursorState((prev) => ({
      ...prev,
      targetX: mousePosition.x,
      targetY: mousePosition.y,
      isVisible: true,
    }));

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const isLink = target.tagName === 'A' || target.closest('a');
      const isProject = target.closest('[data-project]');

      if (isButton || isLink) {
        setCursorState((prev) => ({
          ...prev,
          isHoveringInteractive: true,
          text: isProject ? 'View' : '',
        }));
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setCursorState((prev) => ({
          ...prev,
          isHoveringInteractive: false,
          text: '',
        }));
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [mousePosition]);

  if (isMobile || !cursorState.isVisible) {
    return null;
  }

  const size = cursorState.isHoveringInteractive ? 16 : 8;
  const cursorOffset = size / 2;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed z-[9999] transition-all duration-100 ease-out"
        style={{
          left: `${cursorState.targetX - cursorOffset}px`,
          top: `${cursorState.targetY - cursorOffset}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div
          className={`w-full h-full rounded-full border border-foreground transition-all duration-300 ${
            cursorState.isHoveringInteractive
              ? 'bg-foreground/5 border-foreground/50'
              : 'bg-foreground/10 border-foreground'
          }`}
        />
        {cursorState.text && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-foreground/60 pointer-events-none">
              {cursorState.text}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
