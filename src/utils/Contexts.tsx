import { createContext, RefObject } from 'react';

export interface IZoomContext {
  isZoomed: boolean;
  outerElemRef?: RefObject<HTMLElement> | null;
}
export const ZoomContext = createContext<IZoomContext>({ isZoomed: false, outerElemRef: undefined });
