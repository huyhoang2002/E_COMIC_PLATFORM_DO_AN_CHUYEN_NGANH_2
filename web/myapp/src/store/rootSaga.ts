import { all } from 'redux-saga/effects'
import comicSagas from './comic/saga'

export function* rootSagas() {
    yield all([...comicSagas])
}

