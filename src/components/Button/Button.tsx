import React, { forwardRef } from 'react';
import { ButtonProps, ButtonStyleMap } from './Button.types';

/**
 * CSS class mappings for button variants and sizes
 * Uses design system variables for consistency
 */
const buttonStyles: ButtonStyleMap = {
  variant: {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary', 
    success: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary hover:bg-primary-light hover:bg-opacity-10 focus:ring-primary',
    danger: 'bg-error text-white hover:bg-red-600 focus:ring-error'
  },
  size: {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base', 
    large: 'px-6 py-3 text-lg'
  }
};

/**
 * Base button classes that apply to all variants
 */
const baseButtonClasses = [
  'inline-flex',
  'items-center',
  'justify-center',
  'gap-2',
  'font-medium',
  'rounded-md',
  'transition-all',
  'duration-200',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none'
].join(' ');

/**
 * Loading spinner component
 */
const LoadingSpinner: React.FC<{ size: 'small' | 'medium' | 'large' }> = ({ size }) => {
  const spinnerSizes = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4', 
    large: 'w-5 h-5'
  };

  return (
    <svg
      className={`animate-spin ${spinnerSizes[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

/**
 * Button Component
 * 
 * A flexible, accessible button component that follows the school's design system.
 * Supports multiple variants, sizes, loading states, and icons.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="large">
 *   Submit Form
 * </Button>
 * 
 * <Button variant="outline" leftIcon={<PlusIcon />}>
 *   Add Student
 * </Button>
 * 
 * <Button loading>
 *   Saving...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      children,
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...rest
    },
    ref
  ) => {
    // Combine all CSS classes
    const buttonClasses = [
      baseButtonClasses,
      buttonStyles.variant[variant],
      buttonStyles.size[size],
      fullWidth ? 'w-full' : '',
      className
    ]
      .filter(Boolean)
      .join(' ');

    // Button is disabled when loading or explicitly disabled
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {/* Left icon or loading spinner */}
        {loading ? (
          <LoadingSpinner size={size} />
        ) : leftIcon ? (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}

        {/* Button text content */}
        <span className={loading ? 'opacity-75' : ''}>
          {children}
        </span>

        {/* Right icon (not shown during loading) */}
        {!loading && rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

// Display name for React DevTools
Button.displayName = 'Button';