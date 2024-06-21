import styles from "./MainLayout.module.css";
import { Header } from "../UI/Header/Header";
import { Footer } from "../UI/Footer/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
