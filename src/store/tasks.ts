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
    setTask: (state: State, action: PayloadAction<{id: number, task: Task}>) => {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload.id),
          action.payload.task,
          ...state.tasks.slice(action.payload.id + 1)
        ]
      }
    },
    deleteTask: (state: State, action: PayloadAction<{id: number}>) => {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload.id),
          ...state.tasks.slice(action.payload.id + 1)
        ]
      }
    }
  }
})
