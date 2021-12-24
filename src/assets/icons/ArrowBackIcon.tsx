import React from 'react';
import { IIconProps } from './IIconProps';

const ArrowBackIcon: React.FC<IIconProps> = (props) => {
  const { size, onClick, color, className } = props;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color || "currentColor"}
      className={className}
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
};

export default ArrowBackIcon;