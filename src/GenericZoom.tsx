import React, { useState, RefObject, useEffect } from 'react';
import { ZoomContext } from './utils/Contexts';

interface IProps {
  children: any;
  isZoomed: boolean;
  outerElemRef?: RefObject<HTMLElement> | null; // accept a ref here
}
const GenericZoom: React.FC<IProps> = ({ children, isZoomed, outerElemRef }) => {
  // TODO HERE
  return (
    <div style={{ width: 'fit-content' }}>
      <ZoomContext.Provider value={{ isZoomed, outerElemRef }}>{children}</ZoomContext.Provider>
    </div>
  );
};

export default GenericZoom;
