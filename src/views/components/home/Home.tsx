import React from 'react'
import { RootState } from 'store'

type Types = {
  tasks: RootState['tasks']['tasks']
  task: RootState['tasks']['tasks'][0]
}

type OwnProps = {
  tasks: Types['tasks']
}

type Handler = {
  handleAddTask: () => void
  handleSetTask: (id: number, task: Types['task']) => void
  handleDeleteTask: (id: number) => void
}

type Props = OwnProps & Handler

export const Home: React.FC<Props> = (props) => {

  const addTaskFunc = () => {
    props.handleAddTask()
  }
  
  const setTaskTitleFunc = (id: number, task: Types['task']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTask(id, {
      id: task.id,
      title: e.target.value,
      done: task.done
    })
  }

  const setTaskDoneFunc = (id: number, task: Types['task']) => () => {
    props.handleSetTask(id, {
      id: task.id,
      title: task.title,
      done: !task.done
    })
  }

  const deleteTask = (id: number) => () => {
    props.handleDeleteTask(id)
  }

  return (
    <div>
      {
        props.tasks.map((task, index) => (
          <div key={task.id}>
            <button onClick={deleteTask(index)}> X </button>
            <span> | </span>
            <input
              type='text'
              value={task.title}
              onChange={setTaskTitleFunc(index, task)}
            />
            <input
              type='checkbox'
              checked={task.done}
              onClick={setTaskDoneFunc(index, task)}
              readOnly
            />
          </div>
        ))
      }
      <button onClick={addTaskFunc}>Add Task</button>
    </div>
  )
}
