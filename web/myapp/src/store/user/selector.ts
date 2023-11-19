import { createSelector } from "reselect";
import { RootState } from "../store";
import { IUserInitialState } from "./initialState";

const userReducer = (state: RootState) => state.userReducer

export const userSelector = createSelector(userReducer, (state: IUserInitialState) => state.user)

export const isLoadingSelector = createSelector(userReducer, (state: IUserInitialState) => state.isLoading)

export const isSuccessSelector = createSelector(userReducer, (state: IUserInitialState) => state.isSuccess)

export const messageSelector = createSelector(userReducer, (state: IUserInitialState) => state.message)