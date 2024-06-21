import { Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export function ErrorMessage() {
  return (
    <Space direction="vertical" style={{ margin: "0 auto" }}>
      <Paragraph
        style={{ textAlign: "center", fontSize: "100px", marginBottom: "0" }}
      >
        😱
      </Paragraph>
      <Title level={3} style={{ textAlign: "center" }}>
        Something went wrong...
      </Title>
    </Space>
  );
}
