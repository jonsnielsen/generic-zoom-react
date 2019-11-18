import React, { useState, createRef, useEffect } from 'react';
import GenericZoom, { GenericZoomContent } from '../';

export default { title: 'Button' };

export const genericZoomWithDefaultOuterElem = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div>
      <GenericZoom isZoomed={isZoomed}>
        <GenericZoomContent>Im generic zoom content</GenericZoomContent>
      </GenericZoom>
      <button onClick={() => setIsZoomed(prev => !prev)}>Toggle zoom</button>
    </div>
  );
};

export const genericZoomWithCustomerOuterElem = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const outerElemRef = createRef<HTMLDivElement>();

  return (
    <div style={{ backgroundColor: 'salmon', height: '200px' }} ref={outerElemRef}>
      <GenericZoom outerElemRef={outerElemRef} isZoomed={isZoomed}>
        <GenericZoomContent>Im generic zoom content</GenericZoomContent>
      </GenericZoom>
      <button onClick={() => setIsZoomed(prev => !prev)}>Toggle zoom</button>
    </div>
  );
};
