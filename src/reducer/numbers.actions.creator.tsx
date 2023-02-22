import { createAction } from "@reduxjs/toolkit";
import { numberActions } from "./numbers.actions.type";

export const addCreator = createAction<string>(numberActions.add);
export const deleteCreator = createAction(numberActions.delete);
export const callCreator = createAction<string>(numberActions.call);
export const endCallCreator = createAction<string>(numberActions.endCall);
