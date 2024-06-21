import { useCallback, useContext, useState } from "react";
import { SearchResult, default as contexts } from "../contexts/searchContext";
import useDebounce from "./useDebounce";
import fetchSearchResults from "../search/fetchSearchResults";
import { getLastSearchQueryFromStorage } from "../search/searchStorage";

export function useSearchQuery() {
  const [query, setQuery] = useState(getLastSearchQueryFromStorage());
  const { setResult, setIsLoading } = useSearchResultContext();

  useDebounce(
    useCallback(() => {
      const setResultAndChangeLoadingState = (searchResult: SearchResult) => {
        setIsLoading(false);
        setResult(searchResult);
      };

      setIsLoading(true);
      fetchSearchResults(query, setResultAndChangeLoadingState);
    }, [query, setResult, setIsLoading]),
    500
  );

  return { query, setQuery };
}

export function useSearchResult() {
  const { result, isLoading } = useSearchResultContext();
  return { result, isLoading };
}

function useSearchResultContext() {
  return useContext(contexts.SearchResultContext);
}
