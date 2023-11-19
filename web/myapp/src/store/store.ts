import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux'
import { combineReducers } from 'redux'
import comicReducer from './comic'
import authReducer from './auth'
import userReducer from './user'
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from './rootSaga'

const reducers = combineReducers({
    comicReducer,
    authReducer,
    userReducer
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(composeEnhancers(sagaMiddleware)))
sagaMiddleware.run(rootSagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
