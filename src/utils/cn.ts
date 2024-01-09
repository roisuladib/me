import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values using clsx and tailwind-merge.
 *
 * @param inputs - Class values to be combined.
 * @returns The combined class string.
 */
export function cn(...inputs: ClassValue[]): string {
   return twMerge(clsx(inputs));
}
