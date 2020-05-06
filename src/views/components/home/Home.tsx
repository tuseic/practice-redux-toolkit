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
  handleSetTask: (id: number, task: Types['task']) => void
}

type Props = OwnProps & Handler

export const Home: React.FC<Props> = (props) => {

  const setTaskFunc = (id: number, task: Types['task']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleSetTask(id, {
      id: task.id,
      title: e.target.value,
      done: task.done
    })
  }

  return (
    <div>
      {
        props.tasks.map((task, index) => (
          <div key={task.id}>
            <input
              type='text'
              value={task.title}
              onChange={setTaskFunc(index, task)}
            />
            <input
              type='checkbox'
              checked={task.done}
              readOnly
            />
          </div>
        ))
      }
    </div>
  )
}
