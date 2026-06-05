import * as React from 'react';
import { cn } from '../utils';

export interface SelectOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  value?: string;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Select({ value, options, placeholder = 'Select...', label, onChange, className }: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((option) => option.value === value);
  const buttonLabel = selected?.label ?? placeholder;
  return (
    <div className={cn('ag-select', className)}>
      <button
        type="button"
        className={cn('ag-select__trigger', open && 'is-open', !selected && 'is-placeholder')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((next) => !next)}
      >
        <span>{buttonLabel}</span>
        <span className="ag-select__chev" aria-hidden="true">⌄</span>
      </button>
      {open && (
        <ul className="ag-select__menu" role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled || undefined}
              className={cn('ag-select__item', option.disabled && 'is-disabled')}
              onClick={() => {
                if (option.disabled) return;
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
              {option.value === value && <span className="ag-select__check" aria-hidden="true">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
