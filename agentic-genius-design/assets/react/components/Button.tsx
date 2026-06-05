import * as React from 'react';
import { cn } from '../utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export function Button({ variant = 'primary', size = 'md', loading, className, children, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'ag-btn',
        `ag-btn--${variant}`,
        size === 'sm' && 'ag-btn--compact',
        size === 'icon' && 'ag-icon-btn',
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="ag-spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}

export interface IconButtonProps extends Omit<ButtonProps, 'size' | 'children'> {
  label: string;
  icon: React.ReactNode;
}

export function IconButton({ label, icon, variant = 'ghost', ...props }: IconButtonProps) {
  return (
    <Button variant={variant} size="icon" aria-label={label} {...props}>
      {icon}
    </Button>
  );
}
