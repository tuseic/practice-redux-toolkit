import { configureStore, combineReducers } from '@reduxjs/toolkit'

export const reducer = combineReducers({})
export type State = ReturnType<typeof reducer>

export const store = configureStore({
  reducer: reducer
})

export type AppDispatch = typeof store.dispatch
