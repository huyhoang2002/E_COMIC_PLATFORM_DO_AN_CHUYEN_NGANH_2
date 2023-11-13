import { AnyAction } from 'redux'
import * as fromActions from './action'
import * as fromActionTypes from './actionType'
import { initialState } from './initialState'

const reducer = (state = initialState, action: AnyAction) => {
    const { type } = action
    switch (type) {
        case fromActionTypes.GET_COMICS:
            console.log("get comic...")
            return {
                ...state,
                isLoading: true
            }
        case fromActionTypes.GET_COMICS_SUCCESS:
            console.log("get comic success...")
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
        default:
            return state
    }
}

export default reducer