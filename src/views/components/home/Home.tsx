import React from 'react'
import { RootState } from 'store'

type Types = {
  tasks: RootState['tasks']['tasks']
}

type OwnProps = {
  tasks: Types['tasks']
}

type Props = OwnProps

export const Home: React.FC<Props> = (props) => {
  return (
    <div>
      {
        props.tasks.map(task => (
          <div key={task.id}>
            <input
              type='text'
              value={task.title}
              readOnly
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
