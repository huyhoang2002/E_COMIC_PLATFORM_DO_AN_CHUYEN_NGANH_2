import { TCategories } from "../../services/models/category"
import { IComic, IComicEpisodeDetailResponse, TEpisode } from "../../services/models/comic"
import { ICommentResponse } from "../../services/models/comic"

export type TComicInitialState = {
    data: Array<IComic>,
    searchResults: Array<IComic>,
    comic: IComic | undefined,
    pageCount: number,
    pageIndex: number,
    pageSize: number,
    totalRows: number,
    isLoading: boolean | undefined,
    isSuccess: boolean | undefined,
    categories: TCategories
    episodes: Array<TEpisode>
    comicEpisodeDetail: IComicEpisodeDetailResponse | undefined
    comments: ICommentResponse[]
}

export const initialState : TComicInitialState = {
    data: [] as Array<IComic>,
    searchResults: [] as Array<IComic>,
    comic: undefined,
    pageCount: 0,
    pageIndex: 0,
    pageSize: 0,
    totalRows: 0,
    isLoading: undefined,
    isSuccess: undefined,
    categories: [] as TCategories,
    episodes: [] as Array<TEpisode>,
    comicEpisodeDetail: undefined,
    comments: [] as ICommentResponse[]
}