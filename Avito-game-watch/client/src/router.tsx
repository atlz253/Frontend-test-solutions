import { createHashRouter } from "react-router-dom";
import { GamesListPage } from "./pages/GamesListPage/GamesListPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { MainLayout } from "./components/MainLayout/MainLayout";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <GamesListPage />,
      },
      {
        path: ":gameId",
        element: <GamePage />,
      },
    ],
  },
]);
