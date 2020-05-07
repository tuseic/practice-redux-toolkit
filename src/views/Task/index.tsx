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
  const handleSetTask = useCallback(
    (taskWithIndex: Types['taskWithIndex']) => {
      dispatch(actions.tasks.setTask(taskWithIndex))
    }, [dispatch]
  )
  const handleDeleteTask = useCallback(
    (index: Types['index']) => {
      dispatch(actions.tasks.deleteTask({index}))
    }, [dispatch]
  )


  const addTaskFunc = () => {
    handleAddTask()
  }

  const setTaskTitleFunc = (taskWithIndex: Types['taskWithIndex']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetTask({
      index: taskWithIndex.index,
      task: {
        ...taskWithIndex.task,
        title: e.target.value
      }
    })
  }

  const setTaskDoneFunc = (taskWithIndex: Types['taskWithIndex']) => () => {
    handleSetTask({
      index: taskWithIndex.index,
      task: {
        ...taskWithIndex.task,
        done: !taskWithIndex.task.done
      }
    })
  }

  const deleteTaskFunc = (index: Types['index']) => () => {
    handleDeleteTask(index)
  }

  
  return (
    <div>
      {
        tasks.map((task, index) => (
          <div key={task.id}>
            <button onClick={deleteTaskFunc(index)}> X </button>
            <span> | </span>
            <input
              type='text'
              value={task.title}
              onChange={setTaskTitleFunc({index, task})}
            />
            <input
              type='checkbox'
              checked={task.done}
              onClick={setTaskDoneFunc({index, task})}
              readOnly
            />
          </div>
        ))
      }
      <button onClick={addTaskFunc}>Add Task</button>
    </div>
  )
}

export default Task
