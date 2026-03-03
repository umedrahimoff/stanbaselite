import { ReactNode } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface FilterBarProps {
  searchPlaceholder: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearch?: () => void;
  onExport?: () => void;
  children: ReactNode;
}

export function FilterBar({
  searchPlaceholder,
  searchValue,
  onSearchChange,
  onSearch,
  onExport,
  children,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <Input
        type="search"
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {children}
      {onSearch && (
        <Button type="button" onClick={onSearch}>
          Search
        </Button>
      )}
      {onExport && (
        <Button variant="secondary" onClick={onExport}>
          Export
        </Button>
      )}
    </div>
  );
}
