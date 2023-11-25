import { createSelector } from "reselect";
import { RootState } from "../store";
import { TComicInitialState } from "./initialState";

const comicReducer = (state: RootState) => state?.comicReducer

export const comicsSelector = createSelector(comicReducer, (state: TComicInitialState) => state.data)

export const categoriesSelector = createSelector(comicReducer, (state: TComicInitialState) => state.categories)

export const pageIndexSelector = createSelector(comicReducer, (state: TComicInitialState) => state.pageIndex)

export const pageSizeSelector = createSelector(comicReducer, (state: TComicInitialState) => state.pageSize)

export const isLoadingSelector = createSelector(comicReducer, (state: TComicInitialState) => state.isLoading)

export const isSuccessSelector = createSelector(comicReducer, (state: TComicInitialState) => state.isSuccess)

export const comicSelector = createSelector(comicReducer, (state: TComicInitialState) => state.comic)

export const episodesSelector = createSelector(comicReducer, (state: TComicInitialState) => state.episodes)

export const comicEpisodeDetailSelector = createSelector(comicReducer, (state: TComicInitialState) => state.comicEpisodeDetail)

export const searchResultSelector = createSelector(comicReducer, (state: TComicInitialState) => state.searchResults)

export const commentSelector = createSelector(comicReducer, (state: TComicInitialState) => state.comments)

export const authorSelector = createSelector(comicReducer, (state: TComicInitialState) => state.authors)

export const authorByIdSelector = createSelector(comicReducer, (state: TComicInitialState) => state.author)