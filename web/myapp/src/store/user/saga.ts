import { call, put, takeLatest } from "redux-saga/effects";
import { ICreateUserProfile, createUserProfileError, createUserProfileSuccess, getUserInfoErrorAction, getUserInfoSuccessAction } from "./action";
import { createUserProfile, getUserInfo } from "../../services/user";
import { IUser } from "../../services/models/user";
import * as fromTypes from './actionType'
import { IBaseResponse } from "../../services/base/base-response";

export function* getUserInfoSaga() {
    try {
        const result: IBaseResponse<IUser> = yield call(getUserInfo)
        if (result.isSuccess === false) {
            yield put(getUserInfoErrorAction())
        } else {
            yield put(getUserInfoSuccessAction(result.response, result.message as string))
        }
    } catch (error) {
        yield put(getUserInfoErrorAction())
        console.log(error)
    }
}

export function* createProfileSaga(action: ICreateUserProfile) {
    try {
        const result : IBaseResponse<string> = yield call(createUserProfile, action.addUser)
        if (result.isSuccess === false) {
            yield put(createUserProfileError())
        } else {
            yield put(createUserProfileSuccess())
        }
    } catch (error) {
        console.log(error)
    }
}

const sagas = [
    takeLatest(fromTypes.GET_USER_INFO, getUserInfoSaga),
    takeLatest(fromTypes.CREATE_USER_PROFILE, createProfileSaga)
]

export default sagas