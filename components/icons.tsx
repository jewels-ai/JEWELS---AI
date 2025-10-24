
import React from 'react';

export const GemIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
    <path d="M2 9h20" />
    <path d="M10 3L2 9" />
    <path d="M14 3l8 6" />
    <path d="M12 22L8 9" />
    <path d="M12 22l4-13" />
  </svg>
);

export const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 2L9.5 8.5 3 10l6.5 5.5L8 22l4-3.5 4 3.5-1.5-6.5L21 10l-6.5-1.5z"/>
  </svg>
);
