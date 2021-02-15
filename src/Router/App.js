import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../containers/login/Login'
import Vista from '../containers/index/index'

const App = () => (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact patth="/vista" component={Vista}/>
      </Switch>
    
    </BrowserRouter>
)

export default App