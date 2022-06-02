import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'

const rootReducer = {
    user
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store
