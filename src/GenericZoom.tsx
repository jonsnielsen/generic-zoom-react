import React, { RefObject } from 'react';
import { ZoomContext } from './utils/Contexts';

interface IProps {
  children: any;
  isZoomed: boolean;
  outerElemRef?: RefObject<HTMLElement> | null; // accept a ref here
}
const GenericZoom: React.FC<IProps> = ({ children, isZoomed, outerElemRef }) => {
  // TODO HERE
  return (
    <div>
      <ZoomContext.Provider value={{ isZoomed, outerElemRef }}>{children}</ZoomContext.Provider>
    </div>
  );
};

export default GenericZoom;
