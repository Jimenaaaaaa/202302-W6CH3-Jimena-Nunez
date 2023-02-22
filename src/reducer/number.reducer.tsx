import { createReducer } from "@reduxjs/toolkit";
import {
  callCreator,
  endCallCreator,
  addCreator,
  deleteCreator,
} from "./numbers.actions.creator";

const initialState: string = "";

export const numberReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCreator, (state, { payload }) => `${state}${payload}`);

  builder.addCase(deleteCreator, (state) => state.slice(0, -1));

  builder.addCase(callCreator, (state, { payload }) => payload);
  builder.addCase(endCallCreator, (_state, { payload }) => payload);

  builder.addDefaultCase((state) => state);
});
