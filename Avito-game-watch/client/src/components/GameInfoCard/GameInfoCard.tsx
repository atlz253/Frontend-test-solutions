import { Card, Skeleton } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import styles from "./GameInfoCard.module.css";
import { Game } from "../../../../types/game";

const bodyStyle = { padding: "1rem" };
const headStyle = { padding: "1rem" };

export function GameInfoCard({ game }: { game?: Game }) {
  if (!game)
    return (
      <Card
        title={<Skeleton.Input active />}
        bodyStyle={bodyStyle}
        className={styles.descriptionCard}
        headStyle={headStyle}
      >
        <Skeleton active />
      </Card>
    );

  const { title, release_date, publisher, developer, genre } = game;

  return (
    <Card
      title={
        <Title level={2} className={styles.gameTitle}>
          {title}
        </Title>
      }
      bodyStyle={bodyStyle}
      className={styles.descriptionCard}
      headStyle={headStyle}
    >
      <Paragraph>
        <b>Release date: </b>
        {new Date(release_date).toLocaleDateString()}
      </Paragraph>
      <Paragraph>
        <b>Publisher: </b>
        {publisher}
      </Paragraph>
      <Paragraph>
        <b>Developer: </b>
        {developer}
      </Paragraph>

      <Paragraph style={{ margin: "0" }}>
        <b>Genre: </b>
        {genre}
      </Paragraph>
    </Card>
  );
}
