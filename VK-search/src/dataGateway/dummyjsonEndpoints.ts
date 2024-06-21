const baseURL: string = "https://dummyjson.com";

export default {
  getSearchUserQueryURL: (query: string) =>
    baseURL + "/users/search?q=" + query,
} as const;
