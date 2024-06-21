import { Card, Skeleton, Space } from "antd";
import { Game } from "../../../../types/game";
import { useNavigate } from "react-router-dom";
import styles from "./GameCard.module.css";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

const bodyStyle = {
  width: "100%",
  padding: "0",
  display: "flex",
  justifyContent: "end",
};

export function GameCard({ game }: { game?: Game }) {
  const navigate = useNavigate();

  function navigateToGamePage() {
    if (!game) return;

    navigate(`/${game.id}`);
  }

  if (!game)
    return (
      <Card
        className={styles.card}
        bodyStyle={bodyStyle}
        style={{ cursor: "auto" }}
      >
        <Skeleton.Image className={styles.skeletonImage} />
        <Space className={styles.content} direction="vertical">
          <Skeleton active />
        </Space>
      </Card>
    );

  return (
    <Card
      onClick={navigateToGamePage}
      className={styles.card}
      bodyStyle={bodyStyle}
    >
      <img src={game.thumbnail} alt={game.title} className={styles.thumbnail} />
      <Space className={styles.content} direction="vertical">
        <Title level={2} className={styles.title}>
          {game.title}
        </Title>
        <Paragraph className={styles.paragraph}>
          <b>Release date: </b>
          {new Date(game.release_date).toLocaleDateString()}
        </Paragraph>
        <Paragraph className={styles.paragraph}>
          <b>Publisher: </b>
          {game.publisher}
        </Paragraph>
        <Paragraph className={styles.paragraph}>
          <b>Genre: </b>
          {game.genre}
        </Paragraph>
      </Space>
    </Card>
  );
}
