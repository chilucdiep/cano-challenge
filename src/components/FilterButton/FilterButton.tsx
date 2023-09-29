interface FilterButtonProps {
  sortBy: "ascending" | "descending";
  onSortChange: () => void;
}

export function FilterButton({ sortBy, onSortChange }: FilterButtonProps) {
  console.log("Filter render");
  return (
    <button onClick={onSortChange}>
      Sort by Environmental Impact {sortBy === "ascending" ? "↑" : "↓"}
    </button>
  );
}
