import { call, put, takeLatest } from "redux-saga/effects";
import { ICommentAction, ICreateUserProfile, commentActionError, commentActionSuccess, createUserProfileError, createUserProfileSuccess, getUserInfoErrorAction, getUserInfoSuccessAction } from "./action";
import { comment, createUserProfile, getUserInfo } from "../../services/user";
import { IUser } from "../../services/models/user";
import * as fromTypes from './actionType'
import { IBaseResponse } from "../../services/base/base-response";
import { ICommentResponse } from "../../services/models/comic";
import { getComicCommentAction, getComicCommentActionError, getComicCommentActionSuccess } from "../comic/action";
import { getComicComment } from "../../services/comic";

export function* getUserInfoSaga() {
    try {
        const result: IBaseResponse<IUser> = yield call(getUserInfo)
        if (result.isSuccess === false) {
            console.log(result.message)
            yield put(getUserInfoErrorAction(result.message as string))
        } else {
            yield put(getUserInfoSuccessAction(result.response, result.message as string))
        }
    } catch (error) {
        // yield put(getUserInfoErrorAction(result.message as string))
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

export function* commentSaga(action: ICommentAction) {
    try {
        const result: IBaseResponse<null> = yield call(comment, action.comment)
        if (result.isSuccess === true) {
            yield put(commentActionSuccess())
        } else {
            yield put(commentActionError())
        }
    } catch (error) {
        yield put(commentActionError())
        console.log(error)
    } finally {
        const result: ICommentResponse[] = yield call(getComicComment, action.comment.commicId)
        console.log(result)
        if (result !== undefined || null) {
            yield put(getComicCommentActionSuccess(result))
        } else {
            yield put(getComicCommentActionError())
        }
    }
}

const sagas = [
    takeLatest(fromTypes.GET_USER_INFO, getUserInfoSaga),
    takeLatest(fromTypes.CREATE_USER_PROFILE, createProfileSaga),
    takeLatest(fromTypes.COMMENT, commentSaga)
]

export default sagas