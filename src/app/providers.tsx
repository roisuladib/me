'use client';

import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

import { Children } from '@/types';

export interface ProvidersProps extends Children {
   themeProps?: Partial<Omit<ThemeProviderProps, 'children'>>;
}

export function Providers({ children, themeProps }: ProvidersProps) {
   const router = useRouter();

   return (
      <NextUIProvider navigate={router.push as any}>
         <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
   );
}
