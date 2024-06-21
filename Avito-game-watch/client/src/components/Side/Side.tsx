import Title from "antd/es/typography/Title";
import { GenreDropdown } from "../GenreDropdown/GenreDropdown";
import styles from "./Side.module.css";
import { PlatformDropdown } from "../PlatformDropdown/PlatformDropdown";

export function Side() {
  return (
    <aside className={styles.side}>
      <Title level={3}>Filters</Title>
      <GenreDropdown />
      <PlatformDropdown style={{ marginTop: "0.5rem" }} />
    </aside>
  );
}
