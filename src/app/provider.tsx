'use client';

import { store } from '$/store';
import type { PropsWithChildren } from 'react';
import { Provider as AppProvider } from 'react-redux';

export function Provider({ children }: PropsWithChildren) {
   return <AppProvider store={store}>{children}</AppProvider>;
}
