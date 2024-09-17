import { Action } from 'redux'
import * as fromActions from './actionType'
import { IAddComicRequest, IAuthorResponse, IComic, IComicEpisodeDetailResponse, IComicResponse, ISearchResponse, TEpisode } from '../../services/models/comic'
import { TCategories } from '../../services/models/category'
import { ICommentResponse } from '../../services/models/comic'

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

export interface IGetComicEpisodeDetailAction extends Action {
    comicId: string,
    index: number
}
export const getComicEpisodeDetailAction = (comicId: string, index: number) : IGetComicEpisodeDetailAction => {
    return {
        type: fromActions.GET_COMIC_EPISODE_DETAIL,
        comicId,
        index
    }
}

export interface IGetComicEpisodeDetailActionSuccess extends Action {
    episodeDetails: IComicEpisodeDetailResponse
}
export const getComicEpisodeDetailActionSuccess = (episodeDetails: IComicEpisodeDetailResponse) : IGetComicEpisodeDetailActionSuccess => {
    return {
        type: fromActions.GET_COMIC_EPISODE_DETAIL_SUCCESS,
        episodeDetails
    }
}

export interface IGetComicEpisodeDetailActionError extends Action {}
export const getComicEpisodeDetailActionError = () : IGetComicEpisodeDetailActionError => {
    return {
        type: fromActions.GET_COMIC_EPISODE_DETAIL_ERROR
    }
}

export interface IGetComicEpisodeDetailByIdAction extends Action {
    comicId: string,
    episodeId: string
}
export const getComicEpisodeDetailByIdAction = (comicId: string, episodeId: string) : IGetComicEpisodeDetailByIdAction => {
    return {
        type: fromActions.GET_COMIC_EPISODE_DETAIL_BY_ID,
        comicId,
        episodeId
    }
}

export interface IGetComicEpisodeDetailByIdActionSuccess extends Action {
    episodeDetails: IComicEpisodeDetailResponse
}
export const getComicEpisodeDetailByIdActionSuccess = (episodeDetails: IComicEpisodeDetailResponse) : IGetComicEpisodeDetailByIdActionSuccess => {
    return {
        type: fromActions.GET_COMIC_EPISODE_DETAIL_BY_ID_SUCCESS,
        episodeDetails
    }
}

export interface IGetComicEpisodeDetailByIdActionError extends Action {}
export const getComicEpisodeDetailByIdActionError = () : IGetComicEpisodeDetailActionError => {
    return {
        type: fromActions.GET_COMIC_EPISODE_DETAIL_BY_ID_ERROR
    }
}

export interface ISearchComicAction extends Action {
    pageSize: number
    pageIndex: number
    categoryId?: string
    keyWord: string
}
export const searchComicAction = (keyWord: string, pageIndex: number, pageSize: number, categoryId?: string): ISearchComicAction => {
    return {
        type: fromActions.SEARCH_COMIC,
        keyWord,
        pageIndex,
        pageSize,
        categoryId
    }
}

export interface ISearchComicSuccessAction extends Action {
    data: Array<IComic>,
    pageCount: number,
    pageIndex: number,
    pageSize: number,
    totalRows: number
}
export const searchComicSuccessAction = (payload: ISearchResponse): ISearchComicSuccessAction => {
    return {
        ...payload,
        type: fromActions.SEARCH_COMIC_SUCCESS
    }
}

export interface ISearchComicErrorAction extends Action {}
export const searchComicErrorAction = (): ISearchComicErrorAction => {
    return {
        type: fromActions.SEARCH_COMIC_ERROR
    }
}

export interface IGetComicComment extends Action {
    comicId: string
}
export const getComicCommentAction = (comicId: string) => {
    return {
        type: fromActions.GET_COMIC_COMMENT,
        comicId
    }
} 

export interface IGetComicCommentSuccess extends Action {
    comments: ICommentResponse[]
}

export const getComicCommentActionSuccess = (comments: ICommentResponse[]): IGetComicCommentSuccess => {
    return {
        type: fromActions.GET_COMIC_COMMENT_SUCCESS,
        comments
    }
}

export interface IGetComicCommentActionError extends Action {}
export const getComicCommentActionError = (): IGetComicCommentActionError => {
    return {
        type: fromActions.GET_COMIC_COMMENT_ERROR
    }
}

export interface IGetAuthorAction extends Action {
    isDelete: boolean
    keyword?: string
}
export const getAuthorAction = (isDelete: boolean, keyword?: string): IGetAuthorAction => {
    return {
        type: fromActions.GET_AUTHOR,
        isDelete,
        keyword
    }
} 

export interface IGetAuthorActionSuccess extends Action {
    authors: IAuthorResponse[]
}
export const getAuthorActionSuccess = (authors: IAuthorResponse[]): IGetAuthorActionSuccess => {
    return {
        type: fromActions.GET_AUTHOR_SUCCESS,
        authors
    }
}

export interface IGetAuthorActionError extends Action {}
export const getAuthorActionError = (): IGetAuthorActionError => {
    return {
        type: fromActions.GET_AUTHOR_ERROR
    }
}

export interface IGetAuthorByIdAction extends Action {
    authorId: string
}
export const getAuthorByIdAction = (authorId: string): IGetAuthorByIdAction => {
    return {
        type: fromActions.GET_AUTHOR_BY_ID,
        authorId
    }
}                                         

export interface IGetAuthorByIdActionSuccess extends Action {
    author: IAuthorResponse
}
export const getAuthorByIdActionSuccess = (author: IAuthorResponse) => {
    return {
        type: fromActions.GET_AUTHOR_BY_ID_SUCCESS,
        author
    }
}

export interface IGetAuthorByIdActionError extends Action {}
export const getAuthorByIdActionError = (): IGetAuthorByIdActionError => {
    return {
        type: fromActions.GET_AUTHOR_BY_ID_ERROR,
    }
}

export interface IAddComicAction extends Action {
    title: string
    description: string
    authorId: string
    categoryId: string
    file: any
}
export const addComicAction = (title: string, description: string, authorId: string, categoryId: string, file: any): IAddComicAction => {
    return {
        type: fromActions.ADD_COMIC,
        title,
        description,
        authorId,
        categoryId,
        file
    }
}

export interface IAddComicActionSuccess extends Action {}
export const addComicActionSuccess = (): IAddComicActionSuccess => {
    return {
        type: fromActions.ADD_COMIC_SUCCESS,
    }
}

export interface IAddComicActionError extends Action {}
export const addComicActionError = (): IAddComicActionError => {
    return {
        type: fromActions.ADD_COMIC_ERROR
    }
}

export interface IGetCategoryById extends Action {
    id: string
}
export const getCategoryById = (id: string): IGetCategoryById => {
    return {
        type: fromActions.GET_CATEGORY_BY_ID,
        id
    }
}

export interface IGetCategoryByIdSuccess extends Action {
    categoryName: string,
    comics: IComic[]
}
export const getCategoryByIdSuccess = (categoryName: string, comics: IComic[]): IGetCategoryByIdSuccess => {
    return {
        type: fromActions.GET_CATEGORY_BY_ID_SUCCESS,
        categoryName,
        comics
    }
}

export interface IGetCategoryByIdError extends Action {}
export const getCategoryByIdError = (): IGetCategoryByIdError => {
    return {
        type: fromActions.GET_CATEGORY_BY_ID_ERROR
    }
}

export interface IAddAuthorAction extends Action {
    name: string
    dateOfBirth: Date
    description: string
}
export const addAuthorAction = (name: string, dateOfBirth: Date, description: string) => {
    return {
        type: fromActions.ADD_AUTHOR,
        name,
        dateOfBirth,
        description
    }
}

export interface IAddAuthorSuccess extends Action {}
export const addAuthorSuccess = (): IAddAuthorSuccess => {
    return {
        type: fromActions.ADD_AUTHOR_SUCCESS
    }
}

export interface IAddAuthorError extends Action {}
export const addAuthorError = (): IAddAuthorError => {
    return {
        type: fromActions.ADD_AUTHOR_ERROR
    }
}

export interface IAddComicToFavoriteAction extends Action {
    comicTitle: string
    comicUrl: string
    userId: string
    userName: string
    comicId: string
}
export const addComicToFavoriteAction = (comicTitle: string, comicUrl: string, userId: string, userName: string, comicId: string): IAddComicToFavoriteAction => {
    return {
        type: fromActions.ADD_COMIC_TO_FAVORITE,
        comicTitle,
        comicUrl,
        userId,
        userName,
        comicId
    }
}

export interface IAddComicToFavoriteActionSuccess extends Action {}
export const addComicToFavoriteActionSuccess = (): IAddComicToFavoriteActionSuccess => {
    return {
        type: fromActions.ADD_COMIC_TO_FAVORITE_SUCCESS
        
    }
}

export interface IAddComicToFavoriteActionError extends Action {}
export const addComicToFavoriteActionError = (): IAddComicToFavoriteActionError => {
    return {
        type: fromActions.ADD_COMIC_TO_FAVORITE_ERROR
    }
}