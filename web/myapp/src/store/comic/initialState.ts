import { TCategories } from "../../services/models/category"
import { IComic } from "../../services/models/comic"

export type TComicInitialState = {
    data: Array<IComic>,
    pageCount: number,
    pageIndex: number,
    pageSize: number,
    totalRows: number,
    isLoading: boolean | undefined,
    isSuccess: boolean | undefined,
    categories: TCategories
}

export const initialState : TComicInitialState = {
    data: [] as Array<IComic>,
    pageCount: 0,
    pageIndex: 0,
    pageSize: 0,
    totalRows: 0,
    isLoading: undefined,
    isSuccess: undefined,
    categories: [] as TCategories
}