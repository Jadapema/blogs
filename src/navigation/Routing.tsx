// REACT IMPORTS
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'

// PROJECT IMPORTS
import Dashboard from '@pages/Dashboard'
import { DASHBOARD } from '@navigation/CONSTANTS'

// ===========================|| ROUTING ||=========================== //

export const Routing = (): ReactElement => {
  return (
    <Switch>
      <Route exact path={DASHBOARD}>
        <Dashboard />
      </Route>
    </Switch>
  )
}
