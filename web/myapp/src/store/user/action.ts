import { Action } from "redux";
import * as fromActions from './actionType'
import { IAddUser, IUser } from "../../services/models/user";

export interface IGetUserInfoAction extends Action {}
export const getUserInfoAction = () : IGetUserInfoAction => {
    return {
        type: fromActions.GET_USER_INFO
    }
}

export interface IGetUserInfoSuccessAction extends Action {
    user: IUser
    message: string
}
export const getUserInfoSuccessAction = (user: IUser, message: string) : IGetUserInfoSuccessAction => {
    return {
        type: fromActions.GET_USER_INFO_SUCCESS,
        user,
        message
    }
}

export interface IGetUserInfoErrorAction extends Action {
    message: string
}
export const getUserInfoErrorAction = (message: string) : IGetUserInfoErrorAction => {
    return {
        type: fromActions.GET_USER_INFO_ERROR,
        message
    }
}

export interface ICreateUserProfile extends Action {
    addUser: IAddUser
}
export const createUserProfile = (addUser: IAddUser) : ICreateUserProfile => {
    return {
        type: fromActions.CREATE_USER_PROFILE,
        addUser
    }
}

export interface ICreateUserProfileSuccess extends Action {}
export const createUserProfileSuccess = () : ICreateUserProfileSuccess => {
    return {
        type: fromActions.CREATE_USER_PROFILE_SUCCESS
    }
}

export interface ICreateUserProfileError extends Action {}
export const createUserProfileError = () : ICreateUserProfileError => {
    return {
        type: fromActions.CREATE_USER_PROFILE_ERROR
    }
}