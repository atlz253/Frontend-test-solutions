import { Side } from "../../components/Side/Side";
import styles from "./GamesListPage.module.css";
import { GamesList } from "../../components/GamesList/GamesList";

export function GamesListPage() {
  return (
    <div className={styles.wrapper}>
      <Side />
      <div className={styles.container}>
        <GamesList />
      </div>
    </div>
  );
}
