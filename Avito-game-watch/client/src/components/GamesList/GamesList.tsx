import { Space } from "antd";
import { useGetGamesListQuery } from "../../redux/services/FreeToGamesAPI";
import { GameCard } from "../GameCard/GameCard";
import styles from "./GamesList.module.css";
import { useSelector } from "react-redux";
import {
  selectGenre,
  selectPlatform,
} from "../../redux/features/searchFilter/selector";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";

export function GamesList() {
  const category = useSelector(selectGenre);
  const platform = useSelector(selectPlatform);
  const { data, isLoading, error } = useGetGamesListQuery({
    category,
    platform,
  });

  if (isLoading)
    return (
      <Space className={styles.list} direction="vertical">
        {Array.from(Array(10).keys()).map((i) => (
          <GameCard key={i} />
        ))}
      </Space>
    );

  if (!data || error) return <ErrorMessage />;

  return (
    <Space className={styles.list} direction="vertical">
      {data.map((item) => (
        <GameCard key={item.id} game={item} />
      ))}
    </Space>
  );
}
