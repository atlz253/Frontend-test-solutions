import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FTGAPI } from "./services/FreeToGamesAPI";
import { searchFilterReducer } from "./features/searchFilter";
import { useDispatch } from "react-redux";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "reduxjs-toolkit-persist";
import expireReducer from "redux-persist-expire";
import { initialState as searchFilterInitialState } from "./features/searchFilter";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
  transforms: [
    expireReducer("FTGAPI", {
      expireSeconds: 300,
      autoExpire: true,
    }),
    expireReducer("searchFilter", {
      expireSeconds: 300,
      autoExpire: true,
      expiredState: searchFilterInitialState,
    }),
  ],
};

const reducers = combineReducers({
  [FTGAPI.reducerPath]: FTGAPI.reducer,
  searchFilter: searchFilterReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers as never);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(FTGAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);
