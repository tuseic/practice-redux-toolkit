import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, actions } from 'store'

type Types = {
  tasks: RootState['tasks']['tasks']
  task: RootState['tasks']['tasks'][0]
  taskWithIndex: {
    index: number
    task: Types['task']
  }
  index: number
}

const Task: React.FC = () => {
  const tasks = useSelector<RootState, Types['tasks']>(
    state => state.tasks.tasks
  )

  const dispatch = useDispatch()

  const handleAddTask = useCallback(
    () => {
      dispatch(actions.tasks.addTask())
    }, [dispatch]
  )

  const handleSetTaskTitle = useCallback(
    (taskWithIndex: Types['taskWithIndex']) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.tasks.setTask({
        index: taskWithIndex.index,
        task: {
          ...taskWithIndex.task,
          title: e.target.value
        }
      }))
    }, [dispatch]
  )

  const handleSetTaskDone = useCallback(
    (taskWithIndex: Types['taskWithIndex']) => () => {
      dispatch(actions.tasks.setTask({
        index: taskWithIndex.index,
        task: {
          ...taskWithIndex.task,
          done: !taskWithIndex.task.done
        }
      }))
    }, [dispatch]
  )

  const handleDeleteTask = useCallback(
    (index: Types['index']) => () => {
      dispatch(actions.tasks.deleteTask({index}))
    }, [dispatch]
  )
  

  return (
    <div>
      {
        tasks.map((task, index) => (
          <div key={task.id}>
            <button onClick={handleDeleteTask(index)}> X </button>
            <span> | </span>
            <input
              type='text'
              value={task.title}
              onChange={handleSetTaskTitle({index, task})}
            />
            <input
              type='checkbox'
              checked={task.done}
              onClick={handleSetTaskDone({index, task})}
              readOnly
            />
          </div>
        ))
      }
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default Task
