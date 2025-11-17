/**
 * Description : - 📌 버튼 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import type { ButtonProps } from '@/types/components.types';

const buttonStyles = cva(
  'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none ' +
    'disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
  {
    variants: {
      variant: {
        primary:
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 shadow-sm hover:shadow-md',
        outline:
          'border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 active:bg-gray-100',
        ghost: 'text-gray-600 hover:bg-gray-100 active:bg-gray-200',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, loading = false, className = '', disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${buttonStyles({ variant, size })} ${className}`}
        {...props}
      >
        {loading && (
          <svg className="mr-2 h-4 w-4 animate-spin text-current" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
