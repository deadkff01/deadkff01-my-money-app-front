import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/billingCycles' component={BillingCycle}/>
      <Route path='*' component={Dashboard}/>
    </Switch>
  </main>
)