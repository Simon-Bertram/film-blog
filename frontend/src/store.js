import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/slices/authSlice'
import { apiSlice } from './redux/slices/apiSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store