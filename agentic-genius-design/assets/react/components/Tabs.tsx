import * as React from 'react';
import { cn } from '../utils';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export function Tabs({ items, value, onChange, children }: { items: TabItem[]; value: string; onChange: (value: string) => void; children?: React.ReactNode }) {
  return (
    <div className="ag-tabs">
      <div className="ag-tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={item.key === value}
            disabled={item.disabled}
            className={cn('ag-tab', item.key === value && 'is-active', item.disabled && 'is-disabled')}
            onClick={() => !item.disabled && onChange(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {children && <div className="ag-tabs__panel" role="tabpanel">{children}</div>}
    </div>
  );
}
