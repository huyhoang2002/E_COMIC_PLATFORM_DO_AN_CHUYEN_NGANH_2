import { call, put, takeLatest } from 'redux-saga/effects'
import { addComic, addComicToFavorite, getAuthor, getAuthorById, getComicById, getComicComment, getComicEpisode, getComicEpisodeDetail, getComicEpisodeDetailByEpisodeId, getComics, searchComic } from '../../services/comic'
import { IAuthorResponse, IComic, IComicEpisodeDetailResponse, IComicResponse, ICommentResponse, IFavoriteComic, ISearchResponse, TEpisode } from '../../services/models/comic'
import { IAddAuthorAction, IAddComicAction, IAddComicToFavoriteAction, IGetAuthorAction, IGetAuthorByIdAction, IGetCategoryById, IGetComicAction, IGetComicByIdAction, IGetComicComment, IGetComicEpisodeDetailAction, IGetComicEpisodeDetailByIdAction, IGetComicEpisodesAction, ISearchComicAction, addAuthorError, addAuthorSuccess, addComicActionError, addComicActionSuccess, addComicToFavoriteActionError, addComicToFavoriteActionSuccess, getAuthorAction, getAuthorActionError, getAuthorActionSuccess, getAuthorByIdActionError, getAuthorByIdActionSuccess, getCategoriesErrorAction, getCategoriesSuccessAction, getCategoryByIdError, getCategoryByIdSuccess, getComicActionError, getComicActionSuccess, getComicByActionSuccess, getComicByIdActionError, getComicCommentActionError, getComicCommentActionSuccess, getComicEpisodeDetailActionError, getComicEpisodeDetailActionSuccess, getComicEpisodeDetailByIdActionError, getComicEpisodeDetailByIdActionSuccess, getComicEpisodesActionError, getComicEpisodesActionSuccess, searchComicErrorAction, searchComicSuccessAction } from './action'
import * as fromActionTypes from './actionType'
import { getCategories, getCategoryById } from '../../services/category'
import { ICategoryDetail, TCategories } from '../../services/models/category'
import { IBaseResponse } from '../../services/base/base-response'
import { addAuthor } from '../../services/author'

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

export function* searchComicSaga(action: ISearchComicAction) {
    try {
        const result: ISearchResponse = yield call(searchComic, {
            keyWord: action.keyWord,
            pageIndex: action.pageIndex,
            pageSize: action.pageSize,
            categoryId: action.categoryId
        })
        if (result === null) {
            yield put(searchComicErrorAction())
        } else {
            yield put(searchComicSuccessAction(result))
        }
    } catch (error) {
        yield put(searchComicErrorAction())
        console.log(error)
    }
}

export function* getComicCommentSaga(action: IGetComicComment) {
    try {
        const result: ICommentResponse[] = yield call(getComicComment, action.comicId)
        if (result !== undefined || null) {
            yield put(getComicCommentActionSuccess(result))
        } else {
            yield put(getComicCommentActionError())
        }
    } catch (error) {
        console.log(error)
    }
}

export function* getAuthorsSaga(action: IGetAuthorAction) {
    try {
        const result: IAuthorResponse[] = yield call(getAuthor, action.isDelete, action.keyword)
        if (result !== null || undefined) {
            yield put(getAuthorActionSuccess(result))
        } else {
            yield put(getAuthorActionError())
        }
    } catch (error) {
        yield put(getAuthorActionError())
        console.log(error)
    } 
}

export function* getAuthorByIdSaga(action: IGetAuthorByIdAction) {
    try {
        const result: IAuthorResponse = yield call(getAuthorById, action.authorId)
        if (result !== null || undefined) {
            yield put(getAuthorByIdActionSuccess(result))
        } else {
            yield put(getAuthorByIdActionError())
        }
    } catch (error) {
        yield put(getAuthorByIdActionError())
        console.log(error)
    }
}

export function* addComicSaga(action: IAddComicAction) {
    try {
        const result: IBaseResponse<string> = yield call(addComic, action)
        if (result.isSuccess === true) {
            yield put(addComicActionSuccess())
        } else {
            yield put(addComicActionError())
        }
    } catch (error) {
        yield put(addComicActionError())
        console.log(error)
    }
}

export function* getCategoryDetailSaga(action: IGetCategoryById) {
    try {
        const result: ICategoryDetail = yield call(getCategoryById, action.id)
        if (result !== null || undefined) {
            yield put(getCategoryByIdSuccess(result.categoryName, result.comics))
        } else {
            yield put(getCategoryByIdError())
        }
    } catch (error) {
        console.log(error)
        yield put(getCategoryByIdError())
    }
}

export function* addAuthorSaga(action: IAddAuthorAction) {
    try {
        const result: IBaseResponse<string> = yield call(addAuthor, action)
        if (result.isSuccess === true) {
            yield put(addAuthorSuccess())
        } else {
            yield put(addAuthorError())
        }
    } catch (error) {
        console.log(error)
        yield put(addAuthorError())
    }
}

export function* addComicToFavoriteSaga(action: IAddComicToFavoriteAction) {
    try {
        const result: IBaseResponse<any> = yield call(addComicToFavorite, action)
        if (result.isSuccess === true) {
            yield put(addComicToFavoriteActionSuccess())
        } else {
            yield put(addComicToFavoriteActionError())
        }
    } catch (error) {
        console.log()
    }
}

const sagas = [
    takeLatest(fromActionTypes.GET_COMICS, getComicsSaga),
    takeLatest(fromActionTypes.GET_CATEGORIES, getCategoriesSaga),
    takeLatest(fromActionTypes.GET_COMIC_BY_ID, getComicByIdSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODES, getComicEpisodesSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODE_DETAIL, getComicEpisodeDetailSaga),
    takeLatest(fromActionTypes.GET_COMIC_EPISODE_DETAIL_BY_ID, getComicEpisodeDetailByIdSaga),
    takeLatest(fromActionTypes.SEARCH_COMIC, searchComicSaga),
    takeLatest(fromActionTypes.GET_COMIC_COMMENT, getComicCommentSaga),
    takeLatest(fromActionTypes.GET_AUTHOR, getAuthorsSaga),
    takeLatest(fromActionTypes.GET_AUTHOR_BY_ID, getAuthorByIdSaga),
    takeLatest(fromActionTypes.ADD_COMIC, addComicSaga),
    takeLatest(fromActionTypes.GET_CATEGORY_BY_ID, getCategoryDetailSaga),
    takeLatest(fromActionTypes.ADD_AUTHOR, addAuthorSaga),
    takeLatest(fromActionTypes.ADD_COMIC_TO_FAVORITE, addComicToFavoriteSaga)
]

export default sagas