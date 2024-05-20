import { cn as _cn, ClassValue } from 'tailwind-variants';

export function cn(...inputs: ClassValue[]) {
   return _cn(inputs)({ twMerge: true });
}
