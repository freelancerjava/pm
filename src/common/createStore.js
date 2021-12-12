import { applyMiddleware, compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers";
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
     sagaMiddleware
    );
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['navigation', 'temp']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {

    let store = createStore(
        persistedReducer,
        undefined,
        compose(middleware)
    )
    let persistor = persistStore(store)
    // sagaMiddleware.run(sagas)

    return { store, persistor }
};

export const history = createBrowserHistory({basename: process.env.PUBLIC_URL})