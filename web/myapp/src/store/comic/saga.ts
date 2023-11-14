import { call, put, takeLatest } from 'redux-saga/effects'
import { getComicById, getComicEpisode, getComics } from '../../services/comic'
import { IComic, IComicResponse, TEpisode } from '../../services/models/comic'
import { IGetComicAction, IGetComicByIdAction, IGetComicEpisodesAction, getCategoriesErrorAction, getCategoriesSuccessAction, getComicActionError, getComicActionSuccess, getComicByActionSuccess, getComicByIdActionError, getComicEpisodesActionError, getComicEpisodesActionSuccess } from './action'
import * as fromActionTypes from './actionType'
import { getCategories } from '../../services/category'
import { TCategories } from '../../services/models/category'

export function* getComicsSaga(action: IGetComicAction) {
    try {
        const result: Array<IComic> = yield call(getComics, action.isDeleted, action.pageSize, action.pageIndex)
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

export function* getComicByIdSaga(action: IGetComicByIdAction) {
    try {
        const result: IComic = yield call(getComicById, action.id);
        if (result !== null || undefined) {
            yield put(getComicByActionSuccess(result))
        } else {
            yield put(getComicByIdActionError())
        }
    } catch (error) {
        yield put(getComicByIdActionError())
        console.log(error)
    }
}

export function* getComicEpisodesSaga(action: IGetComicEpisodesAction) {
    try {
        const result: Array<TEpisode> = yield call(getComicEpisode, action.comicId)
        if (result !== null || undefined) {
            yield put(getComicEpisodesActionSuccess(result))
        } else {
            yield put(getComicEpisodesActionError())
        }
    } catch (error) {
        yield put(getComicEpisodesActionError())
        console.log(error)
    }
}

const sagas = [
    takeLatest(fromActionTypes.GET_COMICS, getComicsSaga),
    takeLatest(fromActionTypes.GET_CATEGORIES, getCategoriesSaga),
    takeLatest(fromActionTypes.GET_COMIC_BY_ID, getComicByIdSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODES, getComicEpisodesSaga)
]

export default sagas