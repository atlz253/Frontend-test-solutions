import { SearchResult } from "../contexts/searchContext";
import DataGateway from "../dataGateway/dataGateway";
import Cache from "../utils/cache";
import { saveLastSearchQueryToStorage } from "./searchStorage";

const fetchSearchResultsCache = new Cache<SearchResult>(60000);

export default async function fetchSearchResults(
  query: string,
  setResult: (searchResult: SearchResult) => void
) {
  const cachedSearchResult = fetchSearchResultsCache.get(query);

  if (cachedSearchResult !== undefined) {
    setResult(cachedSearchResult);
  }
  else {
    const users = await DataGateway.getUsers(query);

    const searchResult: SearchResult = { query, users };

    fetchSearchResultsCache.set(query, searchResult);

    setResult({ query, users });
  }

  saveLastSearchQueryToStorage(query);
}
