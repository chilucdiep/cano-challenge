interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearchTermChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
    />
  );
}
