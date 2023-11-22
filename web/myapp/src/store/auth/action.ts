import { Action } from "redux";
import { ISignIn, ISignUp } from "../../services/models/auth";
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
    role: string
}
export const signInActionSuccess = (accessToken: string, refreshToken: string, tokenType: string, role: string) : ISignInActionSuccess => {
    return {
        type: fromActions.SIGN_IN_SUCCESS,
        accessToken,
        refreshToken,
        tokenType,
        role
    }
}

export interface ISignInActionError extends Action {}
export const signInActionError = () : ISignInActionError => {
    return {
        type: fromActions.SIGN_IN_ERROR
    }
}

export interface IResetAuthState extends Action{}
export const resetAuthState = () : IResetAuthState => {
    return {
        type: fromActions.RESET_AUTH_STATE_ACTION
    }
}

export interface ISignUpAction extends Action {
    userName: string
    email: string
    password: string
    role: string
}
export const signUpAction = ({ userName, email, password, role }: ISignUp) : ISignUpAction => {
    return {
        type: fromActions.SIGN_UP,
        userName,
        email,
        password,
        role
    }
}

export interface ISignUpActionSuccess extends Action {}
export const signUpActionSuccess = () : ISignUpActionSuccess => {
    return {
        type: fromActions.SIGN_UP_SUCCESS
    }
}

export interface ISignUpActionError extends Action {}
export const signUpActionError = () : ISignUpActionError => {
    return {
        type: fromActions.SIGN_UP_ERROR
    }
}

export interface ISignOutAction extends Action {}
export const signOutAction = () : ISignOutAction => {
    return {
        type: fromActions.SIGN_OUT
    }
}

export interface ISignOutActionSuccess extends Action {}
export const signOutActionSuccess = () : ISignOutActionSuccess => {
    return {
        type: fromActions.SIGN_OUT_SUCCESS
    }
}

export interface ISignOutActionError extends Action {}
export const signOutActionError = () : ISignOutActionError => {
    return {
        type: fromActions.SIGN_OUT_ERROR
    }
}