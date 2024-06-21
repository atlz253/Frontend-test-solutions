import Title from "antd/es/typography/Title";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

export function Header() {
  const navigate = useNavigate();

  function goToHomePage(event: MouseEvent) {
    event.preventDefault();

    navigate("/");
  }

  return (
    <header className={styles.header}>
      {window.history.state && window.history.state.idx > 0 && (
        <ArrowLeftOutlined
          className={styles.back}
          onClick={() => navigate(-1)}
        />
      )}

      <a href="/" className={styles.titleWrapper} onClick={goToHomePage}>
        <Title className={styles.title}>Game watch</Title>
      </a>
    </header>
  );
}
