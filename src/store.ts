import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { numberReducer } from "./reducer/number.reducer";

export const store = configureStore({
  reducer: {
    numbers: numberReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
