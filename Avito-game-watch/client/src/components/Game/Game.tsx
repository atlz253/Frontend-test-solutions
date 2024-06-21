import { Card, Carousel, Col, Row, Skeleton } from "antd";
import { useGetGameQuery } from "../../redux/services/FreeToGamesAPI";
import Title from "antd/es/typography/Title";
import styles from "./Game.module.css";
import { SystemRequirements } from "../SystemRequirements/SystemRequirements";
import { LoadingOutlined, PictureOutlined } from "@ant-design/icons";
import { GameInfoCard } from "../GameInfoCard/GameInfoCard";
import { ErrorMessage } from "../UI/ErrorMessage/ErrorMessage";

const bodyStyle = { display: "flex" };

export function Game({ id }: { id: string }) {
  const { data, isLoading, error } = useGetGameQuery(id);

  if (isLoading)
    return (
      <Card bodyStyle={bodyStyle} style={{ flex: 1 }}>
        <div className={styles.container}>
          <Row>
            <Col xs={24} sm={10} xl={7}>
              <Skeleton.Image
                rootClassName={styles.skeletonImageWrapper}
                style={{ width: "100%", height: "100%", minHeight: "150px" }}
              />
            </Col>
            <Col xs={24} sm={14} xl={17}>
              <GameInfoCard />
            </Col>
          </Row>
          <Row justify="center" style={{ padding: "1rem" }}>
            <LoadingOutlined style={{ fontSize: "30px" }} />
          </Row>
        </div>
      </Card>
    );

  if (!data || error) return <ErrorMessage />;

  return (
    <Card bodyStyle={bodyStyle} style={{ flex: 1 }}>
      <div className={styles.container}>
        <Row>
          <Col xs={24} sm={10} xl={7}>
            <img
              src={data.thumbnail}
              alt={data.title}
              className={styles.thumbnail}
            />
          </Col>
          <Col xs={24} sm={14} xl={17}>
            <GameInfoCard game={data} />
          </Col>
        </Row>
        {data.minimum_system_requirements && (
          <SystemRequirements
            requirements={data.minimum_system_requirements}
            style={{ marginTop: "1rem" }}
          />
        )}
        <Title level={3} style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <PictureOutlined /> Screenshots
        </Title>
        <div className={styles.carouselWrapper}>
          <Carousel>
            {data.screenshots.map((screenshot) => (
              <img key={screenshot.id} src={screenshot.image} />
            ))}
          </Carousel>
        </div>
      </div>
    </Card>
  );
}
