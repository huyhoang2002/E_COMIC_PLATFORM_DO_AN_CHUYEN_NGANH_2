import { createSelector } from "reselect";
import { RootState } from "../store";
import { TComicInitialState } from "./initialState";

const comicReducer = (state: RootState) => state?.comicReducer

export const comicsSelector = createSelector(comicReducer, (state: TComicInitialState) => state.data)

export const categoriesSelector = createSelector(comicReducer, (state: TComicInitialState) => state.categories)

