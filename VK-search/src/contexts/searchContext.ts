import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "../user/user";

const defaultSearchResultContext: SearchResultContext = {
  result: {
    query: "",
    users: [],
  },
  isLoading: false,
  setIsLoading: () => undefined,
  setResult: () => undefined,
};

type SearchResultContext = {
  result: SearchResult;
  setResult: Dispatch<SetStateAction<SearchResult>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export type SearchResult = {
  query: string;
  users: User[];
};

export default {
  defaultSearchResultContext,
  SearchResultContext: createContext(defaultSearchResultContext),
} as const;
