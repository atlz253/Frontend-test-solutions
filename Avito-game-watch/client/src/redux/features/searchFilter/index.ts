import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  genre: "all",
  platform: "all",
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setGenre: (state, { payload }: PayloadAction<string>) => {
      state.genre = payload;
    },
    setPlatform: (state, { payload }: PayloadAction<string>) => {
      state.platform = payload;
    },
  },
});

export const searchFilterReducer = searchFilterSlice.reducer;
export const searchFilterActions = searchFilterSlice.actions;
