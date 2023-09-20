interface FilterButtonProps {
  sortBy: "ascending" | "descending";
  onSortChange: () => void;
}

export function FilterButton({ sortBy, onSortChange }: FilterButtonProps) {
  return (
    <button onClick={onSortChange}>
      Sort by Environmental Impact {sortBy === "ascending" ? "↑" : "↓"}
    </button>
  );
}
