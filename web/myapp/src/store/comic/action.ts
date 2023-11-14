import { Action } from 'redux'
import * as fromActions from './actionType'
import { IComic, IComicResponse, TEpisode } from '../../services/models/comic'
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
}
export const getComicActionSuccess = (action: Array<IComic>) : IGetComicActionSuccess => {
    return {
        type: fromActions.GET_COMICS_SUCCESS,
        data: action
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

export interface IGetComicByIdAction extends Action {
    id: string
}
export const getComicByIdAction = (id: string) : IGetComicByIdAction => {
    return {
        type: fromActions.GET_COMIC_BY_ID,
        id
    }
}

export interface IGetComicByIdActionSuccess extends Action {
    comic: IComic
}
export const getComicByActionSuccess = (comic: IComic) : IGetComicByIdActionSuccess => { 
    return {
        type: fromActions.GET_COMIC_BY_ID_SUCCESS,
        comic
    }
}

export interface IGetComicByIdActionError extends Action {}
export const getComicByIdActionError = () : IGetComicByIdActionError => { 
    return {
        type: fromActions.GET_COMIC_BY_ID_ERROR,
    }
}

export interface IGetComicEpisodesAction extends Action {
    comicId: string
}
export const getComicEpisodesAction = (comicId: string) : IGetComicEpisodesAction => {
    return {
        type: fromActions.GET_COMIC_EPISODES,
        comicId
    }
}

export interface IGetComicEpisodesActionSuccess extends Action {
    episodes: Array<TEpisode>
}
export const getComicEpisodesActionSuccess = (episodes: Array<TEpisode>) : IGetComicEpisodesActionSuccess => {
    return {
        type: fromActions.GET_COMIC_EPISODES_SUCCESS,
        episodes
    }
} 

export interface IGetComicEpisodesActionError extends Action {}
export const getComicEpisodesActionError = () : IGetComicEpisodesActionError => {
    return {
        type: fromActions.GET_COMIC_EPISODES_ERROR
    }
}