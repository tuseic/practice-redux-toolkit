import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'store/tasks'

export const reducer = combineReducers({
  tasks: tasks.reducer
})

export const store = configureStore({ reducer })

export type State = ReturnType<typeof reducer>
export type Dispatch = typeof store.dispatch
