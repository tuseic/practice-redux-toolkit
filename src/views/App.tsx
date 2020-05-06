import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from 'views/containers/home/HomeContainer'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path='/'><HomeContainer/></Route>
    </Router>
  )
}

export default App
