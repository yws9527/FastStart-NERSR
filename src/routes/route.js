import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import * as _ from '../exports'
import history from './oHistory'

const BasicRoute = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={_.App}/>
      <Route exact path="/login" component={_.Login}/>
      <Route exact path="/perfectInfo" component={_.PerfectInfo}/>
    </Switch>
  </Router>
)

export default BasicRoute