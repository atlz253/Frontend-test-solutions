import { useParams } from "react-router-dom";
import { Game } from "../../components/Game/Game";
import styles from "./GamePage.module.css";
import { ErrorMessage } from "../../components/UI/ErrorMessage/ErrorMessage";

export function GamePage() {
  const { gameId } = useParams();

  if (!gameId) return <ErrorMessage />;

  return (
    <div className={styles.container}>
      <Game id={gameId} />
    </div>
  );
}
