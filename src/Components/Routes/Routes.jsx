import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ShowDetails from '../ShowDetails/ShowDetails'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />    
    <Route exact path='/ShowDetails/:id' component={ShowDetails} />
  </Switch>
)

export default Routes
