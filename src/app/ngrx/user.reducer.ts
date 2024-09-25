import { createAction, createReducer,on } from "@ngrx/store";
import { setUser,resetUser } from "./user.action";

export const initialState = "";
export const userReducer =createReducer(
  initialState,
  on(setUser, (state, action) => state=action.username), 
  on(resetUser, (state) => state =""),
);