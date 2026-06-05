import * as React from 'react';
import { cn } from '../utils';

export interface SidebarItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onSelect?: () => void;
}

export function Sidebar({ brand, items, activeKey, className }: { brand: React.ReactNode; items: SidebarItem[]; activeKey?: string; className?: string }) {
  return (
    <aside className={cn('ag-sidebar', className)}>
      <div className="ag-sidebar__brand">{brand}</div>
      <nav className="ag-sidebar__nav" aria-label="Primary">
        {items.map((item) => {
          const active = item.key === activeKey;
          const content = (
            <>
              {item.icon}
              <span>{item.label}</span>
            </>
          );
          const className = cn('ag-sidebar__item', active && 'is-active');
          return item.href ? (
            <a key={item.key} className={className} href={item.href} aria-current={active ? 'page' : undefined}>{content}</a>
          ) : (
            <button key={item.key} type="button" className={className} onClick={item.onSelect}>{content}</button>
          );
        })}
      </nav>
    </aside>
  );
}
