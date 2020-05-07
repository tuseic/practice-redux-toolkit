import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Task = {
  id: number
  title: string
  done: boolean
}

type State = {
  count: number
  tasks: Task[]
}

const initialState: State = {
  count: 0,
  tasks: [
    {
      id: 0,
      title: 'first todo',
      done: true
    }, {
      id: 1,
      title: 'next todo',
      done: false
    }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: State) => {
      return {
        ...state,
        count: state.count + 1,
        tasks: [
          ...state.tasks,
          {
            id: state.count,
            title: '',
            done: false
          }
        ]
      }
    },
    setTask: (state: State, action: PayloadAction<{index: number, task: Task}>) => {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload.index),
          action.payload.task,
          ...state.tasks.slice(action.payload.index + 1)
        ]
      }
    },
    deleteTask: (state: State, action: PayloadAction<{index: number}>) => {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload.index),
          ...state.tasks.slice(action.payload.index + 1)
        ]
      }
    }
  }
})
