import { Game, GameDetails } from "../../../types/game";
import { curryFetch } from "./curryFetch";

const BASE = "https://www.freetogame.com";

export const FTGFetchGames = (params = {}) =>
  curryFetch(BASE, "/api/games", params) as Promise<Game[]>;

export const FTGFetchGame = (params: { id: string }) =>
  curryFetch(BASE, "/api/game", params) as Promise<GameDetails>;
