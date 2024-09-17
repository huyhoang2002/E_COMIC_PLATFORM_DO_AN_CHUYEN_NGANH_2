import { createSelector } from "reselect";
import { RootState } from "../store";
import { IAuthInitialState } from "./initialState";

const authReducer = (state: RootState) => state.authReducer

export const isLoadingSelector = createSelector(authReducer, (state: IAuthInitialState) => state.isLoading)

export const isSuccessSelector = createSelector(authReducer, (state: IAuthInitialState) => state.isSuccess)

export const accessTokenSelector = createSelector(authReducer, (state: IAuthInitialState) => state.accessToken)

export const refreshTokenSelector = createSelector(authReducer, (state: IAuthInitialState) => state.refreshToken)

export const tokenTypeSelector = createSelector(authReducer, (state: IAuthInitialState) => state.tokenType)

export const roleSelector = createSelector(authReducer, (state: IAuthInitialState) => state.role)