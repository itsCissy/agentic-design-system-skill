import * as React from 'react';
import { cn } from '../utils';

export interface DropdownMenuItem {
  key: string;
  label: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}

export function DropdownMenu({ label, items, className }: { label?: string; items: DropdownMenuItem[]; className?: string }) {
  return (
    <div className={cn('ag-menu', className)} role="menu">
      {label && <div className="ag-menu__label">{label}</div>}
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          role="menuitem"
          disabled={item.disabled}
          className={cn('ag-menu__item', item.danger && 'ag-menu__item--danger', item.disabled && 'is-disabled')}
          onClick={item.onSelect}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
