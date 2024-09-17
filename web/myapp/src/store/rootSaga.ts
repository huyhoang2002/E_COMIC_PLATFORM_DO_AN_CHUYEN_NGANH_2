import { all } from 'redux-saga/effects'
import comicSagas from './comic/saga'
import authSagas from './auth/saga'
import userSagas from './user/saga'

export function* rootSagas() {
    yield all([...comicSagas])
    yield all([...authSagas])
    yield all([...userSagas])
}

