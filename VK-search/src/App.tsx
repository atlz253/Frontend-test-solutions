import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { SearchContextProvider } from "./contexts/SearchContextProvider";

export default function App() {
  return (
    <SearchContextProvider>
      <SearchForm />
      <div className="usersList">
        <SearchResults />
      </div>
    </SearchContextProvider>
  );
}
