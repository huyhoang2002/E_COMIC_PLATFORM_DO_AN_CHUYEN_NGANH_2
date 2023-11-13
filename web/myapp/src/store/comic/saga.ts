import { call, put, takeLatest } from 'redux-saga/effects'
import { getComics } from '../../services/comic'
import { IComicResponse } from '../../services/models/comic'
import { IGetComicAction, getCategoriesErrorAction, getCategoriesSuccessAction, getComicActionError, getComicActionSuccess } from './action'
import * as fromActionTypes from './actionType'
import { getCategories } from '../../services/category'
import { TCategories } from '../../services/models/category'

export function* getComicsSaga(action: IGetComicAction) {
    try {
        const result: IComicResponse = yield call(getComics, action.isDeleted, action.pageSize, action.pageIndex)
        if (result !== null || undefined) {
            yield put(getComicActionSuccess(result))
        } else {
            yield put(getComicActionError())
        }
    } catch (error) {
        console.log(error)
        yield put(getComicActionError())
    }
} 

export function* getCategoriesSaga() {
    try {
        const result: TCategories = yield call(getCategories);
        if (result !== null || undefined) {
            yield put(getCategoriesSuccessAction({
                categories: result
            }))
        } else {
            yield put(getCategoriesErrorAction())
        }

    } catch (error) {
        console.log(error)
        yield put(getCategoriesErrorAction())
    }
}

const sagas = [
    takeLatest(fromActionTypes.GET_COMICS, getComicsSaga),
    takeLatest(fromActionTypes.GET_CATEGORIES, getCategoriesSaga)
]

export default sagas