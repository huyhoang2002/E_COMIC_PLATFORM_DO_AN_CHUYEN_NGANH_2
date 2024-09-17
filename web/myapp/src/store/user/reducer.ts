import { AnyAction } from "redux";
import initialState, { IUserInitialState } from "./initialState";
import * as fromActions from './actionType'
import * as fromBaseActions from '../base/actionType'

const reducer = (state: IUserInitialState = initialState, action: AnyAction) => {
    switch (action.type) {
        case fromActions.GET_USER_INFO:
            return {
                ...state,
                isLoading: true
            }
        case fromActions.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                user: action?.user,
                message: action?.message
            }
        case fromActions.GET_USER_INFO_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                message: action?.message
            }
        case fromActions.CREATE_USER_PROFILE:
            return {
                ...state,
                isLoading: true,
            }
        case fromActions.CREATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }
        case fromActions.CREATE_USER_PROFILE_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActions.COMMENT:
            return {
                ...state,
                isCommentLoading: true
            }
        case fromActions.COMMENT_SUCCESS:
            return {
                ...state,
                isCommentLoading: false,
                isCommentSuccess: true
            }
        case fromActions.COMMENT_ERROR:
            return {
                ...state,
                isCommentLoading: false,
                isCommentSuccess: false
            }
        case fromBaseActions.RESET_STATE_ACTION:
            return initialState
        default:
            return state
    }
}

export default reducer