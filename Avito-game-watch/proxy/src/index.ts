import dotenv from "dotenv";
import express, { Response } from "express";
import { FTGFetchGame, FTGFetchGames } from "./utils/freeToGameFetch";
import { Game, GameDetails } from "../../types/game";
import cors from "cors";
import { getCacheImage } from "./utils/getCacheImage";
import { resolve } from "path";
import { getProxyImageURL } from "./utils/getProxyImageURL";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/g/:gameId/:filename", async (req, res) => {
  const path = await getCacheImage(req.url);

  res.sendFile(path);
});

app.get("/games", async (req, res: Response<Game[]>) => {
  const data = await FTGFetchGames(req.query);

  for (const game of data) game.thumbnail = getProxyImageURL(game.thumbnail);

  res.send(data);
});

app.get("/game", async (req, res: Response<GameDetails>) => {
  let id = req.query.id;

  if (typeof id !== "string") id = "";

  try {
    const data = await FTGFetchGame({ id });

    data.thumbnail = getProxyImageURL(data.thumbnail);

    data.screenshots.forEach(
      (screenshot) => (screenshot.image = getProxyImageURL(screenshot.image))
    );

    res.send(data);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Local: http://localhost:${PORT}`);
});
