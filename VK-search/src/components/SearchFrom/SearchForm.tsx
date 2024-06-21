import { useSearchQuery } from "../../hooks/useSearch";
import "./styles.css";

export function SearchForm() {
  const { query, setQuery } = useSearchQuery();

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
    </div>
  );
}
