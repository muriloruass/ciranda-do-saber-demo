import React from 'react';
import { LogoProps, LogoStyleMap } from './Logo.types';
import cirandaLogo from '../../assets/ciranda-logo.png';

/**
 * Logo size configurations with responsive design
 */
const logoStyles: LogoStyleMap = {
  size: {
    small: {
      width: 40,
      height: 'auto',
      textSize: 'text-sm'
    },
    medium: {
      width: 80,
      height: 'auto', 
      textSize: 'text-base'
    },
    large: {
      width: 120,
      height: 'auto',
      textSize: 'text-lg'
    },
    xlarge: {
      width: 160,
      height: 'auto',
      textSize: 'text-xl'
    }
  }
};

/**
 * Default school information
 */
const SCHOOL_NAME = 'Ciranda do Saber';
const SCHOOL_TAGLINE = 'Educating with commitment since 2006';
const SCHOOL_LOCATION = 'Samavá-Bahia';

/**
 * Logo Component
 * 
 * A flexible logo component that displays the Ciranda do Saber school logo
 * with various size options, text configurations, and interactive capabilities.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Logo size="medium" />
 * 
 * // With school name text
 * <Logo size="large" showText />
 * 
 * // Clickable logo for navigation
 * <Logo size="small" clickable onClick={() => navigate('/')} />
 * 
 * // Custom text override
 * <Logo size="medium" showText customText="Welcome Back!" />
 * ```
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  variant = 'default',
  showText = false,
  customText,
  clickable = false,
  onClick,
  className = '',
  alt = `${SCHOOL_NAME} Logo`,
  ...rest
}) => {
  const sizeConfig = logoStyles.size[size];
  
  // Determine text to display
  const displayText = customText || SCHOOL_NAME;
  
  // Base container classes
  const containerClasses = [
    'inline-flex',
    'flex-col',
    'items-center',
    'gap-2',
    clickable ? 'cursor-pointer transition-transform hover:scale-105' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  // Logo image classes
  const logoClasses = [
    'select-none',
    'transition-all',
    'duration-200',
    clickable ? 'hover:brightness-110' : ''
  ]
    .filter(Boolean)
    .join(' ');

  // Text classes using design system
  const textClasses = [
    sizeConfig.textSize,
    'font-semibold',
    'text-gray-800',
    'text-center',
    'leading-tight',
    'select-none'
  ].join(' ');

  // Handle click events
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  // Handle keyboard interactions for accessibility
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (clickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={containerClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `Navigate to home - ${alt}` : undefined}
    >
      {/* Logo Image */}
      <img
        src={cirandaLogo}
        alt={alt}
        width={sizeConfig.width}
        height={sizeConfig.height}
        className={logoClasses}
        loading="lazy"
        {...rest}
      />
      
      {/* Optional text below logo */}
      {showText && (
        <div className="text-center">
          <div className={textClasses}>
            {displayText}
          </div>
          
          {/* Show tagline and location for larger sizes */}
          {size === 'large' || size === 'xlarge' ? (
            <div className="mt-1">
              <div className="text-xs text-gray-600 italic">
                "{SCHOOL_TAGLINE}"
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {SCHOOL_LOCATION}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

// Display name for React DevTools
Logo.displayName = 'Logo';