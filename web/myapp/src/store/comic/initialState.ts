import { TCategories } from "../../services/models/category"
import { IComic, TEpisode } from "../../services/models/comic"

export type TComicInitialState = {
    data: Array<IComic>,
    comic: IComic | undefined,
    pageCount: number,
    pageIndex: number,
    pageSize: number,
    totalRows: number,
    isLoading: boolean | undefined,
    isSuccess: boolean | undefined,
    categories: TCategories
    episodes: Array<TEpisode>
}

export const initialState : TComicInitialState = {
    data: [] as Array<IComic>,
    comic: undefined,
    pageCount: 0,
    pageIndex: 0,
    pageSize: 0,
    totalRows: 0,
    isLoading: undefined,
    isSuccess: undefined,
    categories: [] as TCategories,
    episodes: [] as Array<TEpisode>
}