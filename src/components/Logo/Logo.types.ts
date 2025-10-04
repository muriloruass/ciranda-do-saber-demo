import { ImgHTMLAttributes } from 'react';

/**
 * Logo size variations
 */
export type LogoSize = 
  | 'small'   // 40px - for navigation bars, compact spaces
  | 'medium'  // 80px - default size for headers
  | 'large'   // 120px - for hero sections, landing pages
  | 'xlarge'; // 160px - for special occasions, splash screens

/**
 * Logo variant types
 */
export type LogoVariant = 
  | 'default'     // Full color logo
  | 'monochrome'  // Single color version (future use)
  | 'white';      // White version for dark backgrounds (future use)

/**
 * Logo component props interface
 * Extends HTML img attributes for full compatibility
 */
export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /**
   * Logo size preset
   * @default 'medium'
   */
  size?: LogoSize;
  
  /**
   * Logo style variant
   * @default 'default'
   */
  variant?: LogoVariant;
  
  /**
   * Whether to show the school name text below logo
   * @default false
   */
  showText?: boolean;
  
  /**
   * Custom text to display (overrides default school name)
   */
  customText?: string;
  
  /**
   * Whether the logo should be clickable (link to home)
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Click handler for interactive logos
   */
  onClick?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Custom alt text (defaults to school name)
   */
  alt?: string;
}

/**
 * Logo style mappings for CSS classes and dimensions
 */
export interface LogoStyleMap {
  size: Record<LogoSize, {
    width: number;
    height: string;
    textSize: string;
  }>;
}