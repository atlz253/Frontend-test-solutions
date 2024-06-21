import { RootState } from "../../store";

export const selectGenre = (state: RootState) => state.searchFilter.genre;

export const selectPlatform = (state: RootState) => state.searchFilter.platform;
