import { AnyAction } from "redux";
import { IAuthInitialState } from "./initialState";
import * as fromActions from './actionType'
import initialState from "./initialState";
import * as fromBaseAction from '../base/actionType'

const reducer = (state: IAuthInitialState = initialState, action: AnyAction) => {
    switch (action.type) {
        case fromActions.SIGN_IN:
            return {
                ...state,
                isLoading: true
            }
        case fromActions.SIGN_IN_SUCCESS:
            console.log(state)
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                accessToken: action?.accessToken,
                refreshToken: action?.refreshToken
            }
        case fromActions.SIGN_IN_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActions.SIGN_UP:
            return {
                ...state,
                isLoading: true
            }
        case fromActions.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }
        case fromActions.SIGN_UP_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromActions.SIGN_OUT:
            return {
                ...state,
                isLoading: true,
            }
        case fromActions.SIGN_OUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }
        case fromActions.SIGN_OUT_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false
            }
        case fromBaseAction.RESET_STATE_ACTION:
            return initialState
        default:
            return state
    }
}

export default reducer
