import { LoadingOutlined } from "@ant-design/icons";
import styles from "./PageLoader.module.css";

export function PageLoader() {
  return (
    <div className={styles.wrapper}>
      <LoadingOutlined className={styles.loader} />
    </div>
  );
}
