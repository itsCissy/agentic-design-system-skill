import * as React from 'react';
import { cn } from '../utils';
import { IconButton } from './Button';

export interface ModalProps {
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  closeLabel?: string;
  className?: string;
}

export function Modal({ open, title, children, footer, onClose, closeLabel = 'Close', className }: ModalProps) {
  if (!open) return null;
  return (
    <div className="ag-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className={cn('ag-modal', className)} role="dialog" aria-modal="true" aria-labelledby="ag-modal-title">
        <div className="ag-modal__header">
          <h2 className="ag-modal__title" id="ag-modal-title">{title}</h2>
          <IconButton label={closeLabel} icon="×" onClick={onClose} />
        </div>
        <div className="ag-modal__body">{children}</div>
        {footer && <div className="ag-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
