import { AnyAction } from 'redux'
import * as fromActions from './action'
import * as fromActionTypes from './actionType'
import { initialState } from './initialState'
import * as fromBaseTypes from '../base/actionType'

const reducer = (state = initialState, action: AnyAction) => {
    const { type } = action
    switch (type) {
        case fromActionTypes.GET_COMICS:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_COMICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                data: action?.data,
                pageCount: action?.pageCount as fromActions.IGetComicActionSuccess,
                pageIndex: action?.pageIndex as fromActions.IGetComicActionSuccess,
                pageSize: action?.pageSize as fromActions.IGetComicActionSuccess,
                totalRows: action?.totalRows as fromActions.IGetComicActionSuccess,
            }
        case fromActionTypes.GET_COMICS_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_CATEGORIES:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                categories: action?.categories as fromActions.IGetCategoriesSuccessAction
            }
        case fromActionTypes.GET_CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_CATEGORY_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_CATEGORY_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                category: {
                    ...state.category,
                    comics: action?.comics,
                    categoryName: action?.categoryName
                }
            }
        case fromActionTypes.GET_CATEGORY_BY_ID_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_COMIC_BY_ID: {
            return {
                ...state,
                isLoading: true
            }
        }
        case fromActionTypes.GET_COMIC_BY_ID_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                comic: action?.comic
            }
        }
        case fromActionTypes.GET_COMIC_BY_ID_ERROR: {
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            }
        }
        case fromActionTypes.GET_COMIC_EPISODES:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_COMIC_EPISODES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                episodes: action?.episodes
            }
        case fromActionTypes.GET_COMIC_EPISODES_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_COMIC_EPISODE_DETAIL:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_COMIC_EPISODE_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                comicEpisodeDetail: action?.episodeDetails
            }
        case fromActionTypes.GET_COMIC_EPISODE_DETAIL_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_COMIC_EPISODE_DETAIL_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_COMIC_EPISODE_DETAIL_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                comicEpisodeDetail: action?.episodeDetails
            }
        case fromActionTypes.GET_COMIC_EPISODE_DETAIL_BY_ID_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.SEARCH_COMIC:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.SEARCH_COMIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                searchResults: action?.data,
                pageCount: action?.pageCount,
                pageIndex: action?.pageIndex,
                pageSize: action?.pageSize,
                totalRows: action?.totalRows,
            }
        case fromActionTypes.SEARCH_COMIC_ERROR: 
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_COMIC_COMMENT:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_COMIC_COMMENT_SUCCESS:
            console.log(action?.comments)
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                comments: action?.comments
            }
        case fromActionTypes.GET_AUTHOR:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_AUTHOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                authors: action?.authors
            }
        case fromActionTypes.GET_AUTHOR_ERROR: 
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.GET_AUTHOR_BY_ID:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_AUTHOR_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                author: action?.author
            }
        case fromActionTypes.GET_AUTHOR_BY_ID_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.ADD_COMIC:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.ADD_COMIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }
        case fromActionTypes.ADD_COMIC_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActionTypes.ADD_AUTHOR:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.ADD_AUTHOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isCreated: true
            }
        case fromActionTypes.ADD_AUTHOR_ERROR:
            return {
                ...state,
                isLoading: false,
                isCreated: false
            }
        case fromActionTypes.ADD_COMIC_TO_FAVORITE:
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.ADD_COMIC_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isCreated: true,
                isLoading: false
            }
        case fromActionTypes.ADD_COMIC_TO_FAVORITE_ERROR:
            return {
                ...state,
                isCreated: false,
                isLoading: false
            }
        case fromBaseTypes.RESET_STATE_ACTION:
            return {
                ...state,
                isSuccess: undefined,
                isLoading: undefined
            }
        default:
            return state
    }
}

export default reducer