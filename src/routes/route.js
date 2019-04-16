import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import * as _ from '../exports'


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={_.App}/>
      <Route exact path="/login" component={_.Login} />
      <Route exact path="/perfectInfo" component={_.PerfectInfo}/>
    </Switch>
  </HashRouter>
)


export default BasicRoute