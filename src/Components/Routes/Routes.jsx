import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Movie from '../Movie/Movie'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />    
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
