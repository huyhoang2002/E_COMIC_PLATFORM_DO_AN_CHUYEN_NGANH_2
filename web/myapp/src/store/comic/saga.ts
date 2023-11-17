import { call, put, takeLatest } from 'redux-saga/effects'
import { getComicById, getComicEpisode, getComicEpisodeDetail, getComicEpisodeDetailByEpisodeId, getComics } from '../../services/comic'
import { IComic, IComicEpisodeDetailResponse, IComicResponse, TEpisode } from '../../services/models/comic'
import { IGetComicAction, IGetComicByIdAction, IGetComicEpisodeDetailAction, IGetComicEpisodeDetailByIdAction, IGetComicEpisodesAction, getCategoriesErrorAction, getCategoriesSuccessAction, getComicActionError, getComicActionSuccess, getComicByActionSuccess, getComicByIdActionError, getComicEpisodeDetailActionError, getComicEpisodeDetailActionSuccess, getComicEpisodeDetailByIdActionError, getComicEpisodeDetailByIdActionSuccess, getComicEpisodesActionError, getComicEpisodesActionSuccess } from './action'
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

export function* getComicEpisodeDetailSaga(action: IGetComicEpisodeDetailAction) {
    try {
        const result: IComicEpisodeDetailResponse = yield call(getComicEpisodeDetail, action.comicId, action.index)
        if (result !== null || undefined) {
            yield put(getComicEpisodeDetailActionSuccess(result))
        } else {
            yield put(getComicEpisodeDetailActionError())
        }
    } catch (error) {
        yield put(getComicEpisodeDetailActionError())
        console.log(error)
    }
}

export function* getComicEpisodeDetailByIdSaga(action: IGetComicEpisodeDetailByIdAction) {
    try {
        const result: IComicEpisodeDetailResponse = yield call(getComicEpisodeDetailByEpisodeId, action.comicId, action.episodeId);
        if (result !== null || undefined) {
            yield put(getComicEpisodeDetailByIdActionSuccess(result))
        } else {
            yield put(getComicEpisodeDetailByIdActionError())
        }
    } catch (error) {
        yield put(getComicEpisodeDetailByIdActionError())
        console.log(error)
    }
}

const sagas = [
    takeLatest(fromActionTypes.GET_COMICS, getComicsSaga),
    takeLatest(fromActionTypes.GET_CATEGORIES, getCategoriesSaga),
    takeLatest(fromActionTypes.GET_COMIC_BY_ID, getComicByIdSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODES, getComicEpisodesSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODE_DETAIL, getComicEpisodeDetailSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODE_DETAIL_BY_ID, getComicEpisodeDetailByIdSaga)
]

export default sagas