import { configureStore } from '@reduxjs/toolkit'
import { tasks } from 'store/tasks'

export const store = configureStore({
  reducer: {
    tasks: tasks.reducer
  }
})

export const actions = {
  tasks: tasks.actions
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
