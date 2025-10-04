import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button variant types based on school brand colors
 */
export type ButtonVariant = 
  | 'primary'    // Orange - main brand color
  | 'secondary'  // Blue - secondary actions  
  | 'success'    // Green - positive actions
  | 'outline'    // Outlined style
  | 'ghost'      // Text only
  | 'danger';    // Red - destructive actions

/**
 * Button size variations
 */
export type ButtonSize = 
  | 'small'   // Compact size for secondary actions
  | 'medium'  // Default size
  | 'large';  // Prominent calls-to-action

/**
 * Button component props interface
 * Extends HTML button attributes for full compatibility
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Button content (text, icons, etc.)
   */
  children: ReactNode;
  
  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  loading?: boolean;
  
  /**
   * Full width button (fills container)
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display before text
   */
  leftIcon?: ReactNode;
  
  /**
   * Icon to display after text
   */
  rightIcon?: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Button style mappings for CSS classes
 */
export interface ButtonStyleMap {
  variant: Record<ButtonVariant, string>;
  size: Record<ButtonSize, string>;
}