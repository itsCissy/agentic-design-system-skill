import * as React from 'react';
import { cn } from '../utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
}

export function Progress({ value, max = 100, label, className, ...props }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={cn('ag-progress', className)}
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <div className="ag-progress__fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
