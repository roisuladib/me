'use client';

import { useCallback, useState } from 'react';
import { useEventListener } from '.';

type MousePosition = {
   x: number;
   y: number;
};

// Custom hook to track mouse position
/**
 * useMousePosition hook returns the current mouse position as an object with 'x' and 'y' coordinates.
 * @returns {MousePosition | undefined} The current mouse position or undefined if not available.
 */
export function useMousePosition(): MousePosition | undefined {
   const [mousePosition, setMousePosition] = useState<MousePosition>();

   const updateMousePosition = useCallback((ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
   }, []);

   useEventListener('mousemove', updateMousePosition);

   return mousePosition;
}
