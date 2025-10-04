import React from 'react';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  variant = 'default',
  clickable = false,
  onClick
}) => {
  const baseClasses = 'card transition-all duration-200';
  const variantClasses = variant === 'highlighted' ? 'ring-2 ring-primary' : '';
  const interactiveClasses = clickable ? 'cursor-pointer hover:shadow-lg hover:scale-105' : '';
  
  const cardClasses = [baseClasses, variantClasses, interactiveClasses, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={clickable ? onClick : undefined}
    >
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};