import { DownOutlined } from "@ant-design/icons";
import { Dropdown as AntDropdown, Button, MenuProps } from "antd";
import { ReactNode } from "react";
import styles from "./Dropdown.module.css";

export interface DropdownProps {
  menu?: MenuProps;
  children?: ReactNode;
}

export function Dropdown({ menu, children }: DropdownProps) {
  return (
    <AntDropdown menu={menu} trigger={["click"]} className={styles.dropdown}>
      <Button className={styles.button}>
        {children}
        <DownOutlined />
      </Button>
    </AntDropdown>
  );
}
