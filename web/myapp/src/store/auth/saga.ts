import { call, put, takeLatest } from 'redux-saga/effects'
import { ISignInAction, ISignUpAction, signInActionError, signInActionSuccess, signOutAction, signOutActionSuccess, signUpActionError, signUpActionSuccess } from './action';
import { signInAsync, signUpAsync } from '../../services/auth';
import { IBaseResponse } from '../../services/base/base-response';
import { Token } from '../../services/models/auth';
import * as fromActions from './actionType'

export function* signInSaga(action: ISignInAction) {
    try {
        const result: IBaseResponse<Token> = yield call(signInAsync, { email: action.email, password: action.password })
        if (result.isSuccess === true) {
            yield put(signInActionSuccess(result.response.accessToken, result.response.refreshToken, result.response.tokenType, result.response.role))
        } else if (result.isSuccess === false) {
            yield put(signInActionError())
        }
    } catch (error) {
        console.log(error)
        yield put(signInActionError())
    } 
}

export function* signUpSaga(action: ISignUpAction) {
    try {
        const result: IBaseResponse<string> = yield call(signUpAsync, action)
        if (result.isSuccess === true) {
            yield put(signUpActionSuccess())
        } else if (result.isSuccess === false) {
            yield put(signUpActionError())
        }
    } catch (error) {
        yield put(signUpActionError())
        console.log(error)
    }
}

export function* signOutSaga() {
    try {
        const result : IBaseResponse<string> = yield call(signOutAction)
        if (result.isSuccess === false) {
            yield put(signOutActionSuccess())
        } else {
            yield put(signOutActionSuccess())
        }
    } catch (error) {
        console.log(error)
    }
}

const saga = [
    takeLatest(fromActions.SIGN_IN, signInSaga),
    takeLatest(fromActions.SIGN_UP, signUpSaga),
    takeLatest(fromActions.SIGN_OUT, signOutSaga)
]

export default saga