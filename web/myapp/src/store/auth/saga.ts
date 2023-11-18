import { call, put, takeLatest } from 'redux-saga/effects'
import { ISignInAction, signInActionError, signInActionSuccess } from './action';
import { signInAsync } from '../../services/auth';
import { IBaseResponse } from '../../services/base/base-response';
import { Token } from '../../services/models/auth';
import * as fromActions from './actionType'

export function* signInSaga(action: ISignInAction) {
    try {
        const result: IBaseResponse<Token> = yield call(signInAsync, { email: action.email, password: action.password })
        if (result.isSuccess === true) {
            yield put(signInActionSuccess(result.response.accessToken, result.response.refreshToken, result.response.tokenType))
        } else {
            yield put(signInActionError())
        }
    } catch (error) {
        console.log(error)
        yield put(signInActionError())
    }
}

const saga = [
    takeLatest(fromActions.SIGN_IN, signInSaga)
]

export default saga