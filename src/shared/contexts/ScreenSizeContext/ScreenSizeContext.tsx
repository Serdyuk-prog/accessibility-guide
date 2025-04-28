import { createContext } from 'react';

export const ScreenSizeContext = createContext<{
  width: number;
  height: number;
} | null>(null);

