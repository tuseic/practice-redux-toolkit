import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, actions } from 'store'
import { Home } from 'views/home/Home'

type Types = {
  tasks: RootState['tasks']['tasks']
  task: RootState['tasks']['tasks'][0]
}

const HomeContainer: React.FC = () => {
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
    (id: number, task: Types['task']) => {
      dispatch(actions.tasks.setTask({id, task}))
    }, [dispatch]
  )
  const handleDeleteTask = useCallback(
    (id: number) => {
      dispatch(actions.tasks.deleteTask({id}))
    }, [dispatch]
  )

  const props = { tasks, handleAddTask, handleSetTask, handleDeleteTask }

  return (
    <Home { ...props }/>
  )
}

export default HomeContainer