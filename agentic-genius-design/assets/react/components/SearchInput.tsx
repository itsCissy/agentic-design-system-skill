import * as React from 'react';
import { cn } from '../utils';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: React.ReactNode;
  onClear?: () => void;
  clearLabel?: string;
}

export function SearchInput({ leadingIcon, onClear, clearLabel = 'Clear search', className, value, ...props }: SearchInputProps) {
  const hasValue = value != null && String(value).length > 0;
  return (
    <div className="ag-search">
      {leadingIcon && <span className="ag-search__leading" aria-hidden="true">{leadingIcon}</span>}
      <input className={cn('ag-search__input', className)} type="search" value={value} {...props} />
      {onClear && hasValue && (
        <button className="ag-search__trailing" type="button" aria-label={clearLabel} onClick={onClear}>
          ×
        </button>
      )}
    </div>
  );
}
