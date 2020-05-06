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
  count: 2,
  tasks: [
    {
      id: 1,
      title: 'first todo',
      done: true
    }, {
      id: 2,
      title: 'next todo',
      done: false
    }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: State, action: PayloadAction<string>) => {
      return {
        ...state,
        count: state.count + 1,
        tasks: [
          ...state.tasks,
          {
            id: state.count,
            title: action.payload,
            done: false
          }
        ]
      }
    },
    doneTask: (state: State, action: PayloadAction<Task>) => {
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload.id),
          {
            ...action.payload,
            done: !action.payload.done
          },
          ...state.tasks.slice(action.payload.id + 1)
        ]
      }
    },
    deleteTask: (state: State, action: PayloadAction<Task>) => {
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
