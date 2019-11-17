import React from 'react';

interface IGenericZoomContent {
  children: any;
  zoomMargin?: { horizontal: string; vertical: string };
}
const GenericZoomContent: React.FC<IGenericZoomContent> = ({
  children,
  zoomMargin = { horizontal: '40px', vertical: '40px' },
}) => {
  return <div>{children}</div>;
};

export default GenericZoomContent;
