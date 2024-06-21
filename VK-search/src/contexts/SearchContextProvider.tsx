import { ReactNode, useState } from "react";
import { default as contexts } from "./searchContext";

export function SearchContextProvider({ children }: ContextProviderProps) {
  return <SearchResultContextProvider>{children}</SearchResultContextProvider>;
}

function SearchResultContextProvider({ children }: ContextProviderProps) {
  const { SearchResultContext, defaultSearchResultContext } = contexts;
  const [result, setResult] = useState(defaultSearchResultContext.result);
  const [isLoading, setIsLoading] = useState(
    defaultSearchResultContext.isLoading
  );

  return (
    <SearchResultContext.Provider
      value={{ result, setResult, isLoading, setIsLoading }}
    >
      {children}
    </SearchResultContext.Provider>
  );
}

type ContextProviderProps = {
  children: ReactNode;
};
