import React, { useContext, createRef, useEffect, useState } from 'react';
import { ZoomContext } from './utils/Contexts';
import GenericZoomJS from 'generic-zoom';

interface IGenericZoomContent {
  children: any;
  zoomMargin?: { horizontal: string; vertical: string };
}
const GenericZoomContent: React.FC<IGenericZoomContent> = ({
  children,
  zoomMargin = { horizontal: '40px', vertical: '40px' },
}) => {
  const { isZoomed, outerElemRef } = useContext(ZoomContext);
  const [zoomJS, setZoomJS] = useState<GenericZoomJS | null>(null);
  const elemToZoomWrapperRef = createRef<HTMLDivElement>();
  const elemToZoomRef = createRef<HTMLDivElement>();
  zoomMargin.horizontal = zoomMargin.horizontal;

  useEffect(() => {
    const elemToZoom = elemToZoomRef.current;
    const elemToZoomWrapper = elemToZoomWrapperRef.current;
    const outerElem = outerElemRef && outerElemRef.current;
    if (elemToZoom && elemToZoomWrapper) {
      setZoomJS(new GenericZoomJS({ outerElem, elemToZoom, elemToZoomWrapper }));
    }
  });

  useEffect(() => {
    if (isZoomed && zoomJS) {
      zoomJS.zoom();
    }
    if (!isZoomed && zoomJS) {
      zoomJS.unZoom();
    }
  }, [isZoomed, zoomJS]);

  return (
    <div
      //  style={baseStyle}
      ref={elemToZoomWrapperRef}
    >
      <div
        // style={baseStyle}
        ref={elemToZoomRef}
      >
        {children}
        {isZoomed}
      </div>
    </div>
  );
};

// const baseStyle = {
//   width: 'fit-content',
//   height: 'fit-content',
// };

export default GenericZoomContent;
