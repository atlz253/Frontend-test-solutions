import { Row } from "antd";
import Title from "antd/es/typography/Title";
import { Dropdown, DropdownProps } from "./UI/Dropdown/Dropdown";
import { CSSProperties } from "react";

interface LabeledDropdownProps extends DropdownProps {
  label?: string;
  style?: CSSProperties;
}

export function LabeledDropdown({
  menu,
  children,
  label,
  style,
}: LabeledDropdownProps) {
  return (
    <Row justify="space-between" align="middle" style={style}>
      <Title style={{ margin: "0" }} level={5}>
        {label}
      </Title>
      <Dropdown menu={menu}>{children}</Dropdown>
    </Row>
  );
}
