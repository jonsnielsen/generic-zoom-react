import React from 'react';

interface IProps {
  children: any;
}
const GenericZoom: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <p>im generic zoom</p>
      {children}
    </div>
  );
};

export default GenericZoom;
