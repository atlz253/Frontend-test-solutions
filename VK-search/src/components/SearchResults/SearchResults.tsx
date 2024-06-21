import { UserCard } from "../UserCard/UserCard";

import "./style.css";
import { useSearchResult } from "../../hooks/useSearch";
import { User } from "../../user/user";

const NO_RESULT_FOUND_FOR_SEARCH_QUERY_MESSAGE: string =
  "Не найдено результатов по текущему запросу";
const FETCH_DATA_MESSAGE = "Получение данных...";

export function SearchResults() {
  const { result, isLoading } = useSearchResult();
  const { users, query } = result;

  const isEmptySearchResult = users.length === 0 && query !== "";

  if (isLoading) {
    return FETCH_DATA_MESSAGE;
  } else if (isEmptySearchResult) {
    return NO_RESULT_FOUND_FOR_SEARCH_QUERY_MESSAGE;
  } else {
    return getUserCards(users);
  }
}

function getUserCards(users: User[]) {
  return users.map((user) => <UserCard {...user} key={user.id} />);
}
