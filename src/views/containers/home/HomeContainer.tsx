import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { Home } from 'views/components/home/Home'

type Types = {
  tasks: RootState['tasks']['tasks']
}

const HomeContainer: React.FC = () => {
  const tasks = useSelector<RootState, Types['tasks']>(
    state => state.tasks.tasks
  )

  const props = { tasks }

  return (
    <Home { ...props }/>
  )
}

export default HomeContainer
