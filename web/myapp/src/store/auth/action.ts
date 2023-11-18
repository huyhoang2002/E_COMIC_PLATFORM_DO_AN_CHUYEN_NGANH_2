import { Action } from "redux";
import { ISignIn } from "../../services/models/auth";
import * as fromActions from './actionType'

export interface ISignInAction extends Action {
    email: string,
    password: string
}
export const signInAction = ({ email, password } : ISignIn) : ISignInAction => {
    return {
        type: fromActions.SIGN_IN,
        email, 
        password
    }
}

export interface ISignInActionSuccess extends Action {
    accessToken: string
    refreshToken: string
    tokenType: string
}
export const signInActionSuccess = (accessToken: string, refreshToken: string, tokenType: string) : ISignInActionSuccess => {
    return {
        type: fromActions.SIGN_IN_SUCCESS,
        accessToken,
        refreshToken,
        tokenType
    }
}

export interface ISignInActionError extends Action {}
export const signInActionError = () : ISignInActionError => {
    return {
        type: fromActions.SIGN_IN_ERROR
    }
}