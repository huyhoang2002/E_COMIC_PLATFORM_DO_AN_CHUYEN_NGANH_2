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
                isSuccess: false
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
        case fromBaseActions.RESET_STATE_ACTION:
            return initialState
        default:
            return state
    }
}

export default reducer