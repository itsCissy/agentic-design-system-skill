import * as React from 'react';
import { cn } from '../utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ invalid, className, ...props }, ref) {
  return <input ref={ref} className={cn('ag-input', invalid && 'ag-input--error', className)} aria-invalid={invalid || undefined} {...props} />;
});

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ invalid, className, ...props }, ref) {
  return <textarea ref={ref} className={cn('ag-input', invalid && 'ag-input--error', className)} aria-invalid={invalid || undefined} {...props} />;
});

export function Field({ label, htmlFor, error, children }: { label: string; htmlFor?: string; error?: string; children: React.ReactNode }) {
  const id = React.useId();
  const fieldId = htmlFor ?? id;
  return (
    <div>
      <label className="ag-field-label" htmlFor={fieldId}>{label}</label>
      {children}
      {error && <div id={`${id}-error`} className="ag-error-text">{error}</div>}
    </div>
  );
}
