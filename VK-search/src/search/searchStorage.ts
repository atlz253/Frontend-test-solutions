const LAST_SEARCH_QUERY_STORAGE_KEY = "lastSearchQuery";

export function saveLastSearchQueryToStorage(query: string) {
  localStorage.setItem(LAST_SEARCH_QUERY_STORAGE_KEY, query);
}

export function getLastSearchQueryFromStorage() {
  return localStorage.getItem(LAST_SEARCH_QUERY_STORAGE_KEY) || "";
}
