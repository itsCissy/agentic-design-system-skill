import * as React from 'react';
import { cn } from '../utils';

export type CardVariant = 'contained' | 'whisper' | 'raised' | 'inset' | 'bare';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  clickable?: boolean;
  selected?: boolean;
}

export function Card({ variant = 'contained', clickable, selected, className, ...props }: CardProps) {
  return <div className={cn('ag-card', `ag-card--${variant}`, clickable && 'is-clickable', selected && 'is-selected', className)} {...props} />;
}

export function CardHeader({ title, action, icon, className }: { title: React.ReactNode; action?: React.ReactNode; icon?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('ag-card__header', className)}>
      <div className="ag-card__title-row">
        {icon}
        <h3 className="ag-card__title">{title}</h3>
      </div>
      {action}
    </div>
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('ag-card__desc', className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('ag-card__footer', className)} {...props} />;
}
