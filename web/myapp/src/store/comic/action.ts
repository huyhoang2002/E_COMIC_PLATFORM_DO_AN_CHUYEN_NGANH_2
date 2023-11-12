import { Action } from 'redux'
import * as fromActions from './actionType'
import { IComic, IComicResponse } from '../../services/models/comic'
import { TCategories } from '../../services/models/category'

export interface IGetComicAction extends Action {
    isDeleted: boolean,
    pageSize: number,
    pageIndex: number
}
export const getComicAction = (action: { isDeleted: boolean, pageSize: number, pageIndex: number }) : IGetComicAction => {
    return {
        type: fromActions.GET_COMICS,
        isDeleted: action.isDeleted,
        pageSize: action.pageSize,
        pageIndex: action.pageIndex
    }
}

export interface IGetComicActionSuccess extends Action {
    data: Array<IComic>,
    pageCount: number,
    pageIndex: number,
    pageSize: number,
    totalRows: number
}
export const getComicActionSuccess = ({ data, pageCount, pageIndex, pageSize, totalRows }: IComicResponse) : IGetComicActionSuccess => {
    return {
        type: fromActions.GET_COMICS_SUCCESS,
        data,
        pageCount,
        pageIndex,
        pageSize,
        totalRows
    }
}

export interface IGetComicActionError extends Action {}
export const getComicActionError = () : IGetComicActionError => {
    return {
        type: fromActions.GET_COMICS_ERROR
    }
}

export interface IGetCategoriesAction extends Action {}
export const getCategoriesAction = () : IGetCategoriesAction => {
    return {
        type: fromActions.GET_CATEGORIES
    }
}

export interface IGetCategoriesSuccessAction extends Action {
    categories: TCategories
}
export const getCategoriesSuccessAction = ({ categories }: { categories: TCategories }) : IGetCategoriesSuccessAction => {
    return {
        type: fromActions.GET_CATEGORIES_SUCCESS,
        categories
    }
}

export interface IGetCategoriesErrorAction extends Action {}
export const getCategoriesErrorAction = () : IGetCategoriesErrorAction => {
    return {
        type: fromActions.GET_CATEGORIES_ERROR
    }
}

