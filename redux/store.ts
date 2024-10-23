// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import globalSlice from './global.slice'

const store = configureStore({
	reducer: {
		global: globalSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}),
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export default store
