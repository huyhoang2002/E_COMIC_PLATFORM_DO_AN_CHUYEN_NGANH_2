import { AnyAction } from "redux";
import { IAuthInitialState } from "./initialState";
import * as fromActions from './actionType'
import initialState from "./initialState";

const reducer = (state: IAuthInitialState = initialState, action: AnyAction) => {
    switch (action.type) {
        case fromActions.SIGN_IN:
            return {
                ...state,
                isLoading: true
            }
        case fromActions.SIGN_IN_SUCCESS:
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
        default:
            return state
    }
}

export default reducer
