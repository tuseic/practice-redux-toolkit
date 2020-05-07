import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Task from 'views/Task'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path='/'><Task/></Route>
    </Router>
  )
}

export default App
