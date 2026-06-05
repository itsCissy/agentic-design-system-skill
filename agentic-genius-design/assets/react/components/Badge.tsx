import * as React from 'react';
import { cn } from '../utils';

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'error' | 'teal' | 'purple' | 'pink' | 'sky' | 'orange';
export type StatusKind = 'running' | 'idle' | 'completed' | 'error' | 'paused';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export function Badge({ variant = 'default', size = 'md', icon, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn('ag-tag', `ag-tag--${variant}`, size === 'sm' && 'ag-tag--sm', className)} {...props}>
      {icon}
      {children}
    </span>
  );
}

export function StatusDot({ status, className }: { status: StatusKind; className?: string }) {
  const classMap: Record<StatusKind, string> = {
    running: 'ag-status__dot--running',
    idle: 'ag-status__dot--idle',
    completed: 'ag-status__dot--completed',
    error: 'ag-status__dot--error',
    paused: 'ag-status__dot--paused',
  };
  return <span className={cn('ag-status__dot', classMap[status], className)} aria-hidden="true" />;
}

export function StatusBadge({ status, label, className }: { status: StatusKind; label: string; className?: string }) {
  const variantMap: Record<StatusKind, BadgeVariant> = {
    running: 'success',
    idle: 'info',
    completed: 'success',
    error: 'error',
    paused: 'default',
  };
  return <Badge variant={variantMap[status]} icon={<StatusDot status={status} />} className={className}>{label}</Badge>;
}
