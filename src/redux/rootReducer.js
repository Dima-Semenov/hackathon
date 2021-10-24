import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

import { authReducer } from './slices/blogSlice/auth/auth.reducer'

import blogReducer from './slices/blogSlice'

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}
const persistAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
	auth: persistAuthReducer,
	blog: blogReducer,
})

export default rootReducer
