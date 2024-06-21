import Paragraph from "antd/es/typography/Paragraph";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Paragraph style={{ margin: "0", textAlign: "center" }}>
        Developed by Fedor Alekseev
      </Paragraph>
    </footer>
  );
}
