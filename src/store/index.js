import todoReducer from './reducers/todoReducer'
import { combineReducers, createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    whiteList: ["count"], //count reducer'ı hiçbir zaman kaybolmayacak. local storage tutulacak.
    blackList: ["user"] //user reducer'ı local storage'da tutma. sayfa yenilendiğinde kaybolsun 
}

const reducers = combineReducers({
    todo: todoReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer
)

export const persistor = persistStore(store)

export default reducers