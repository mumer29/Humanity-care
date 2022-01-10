import React from 'react'

import { Route, Switch  } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Orders from '../pages/Orders'

const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/dashboard/customers' component={Customers} />
            <Route path='/dashboard/orders' component={Orders} />
        </Switch>
    )
}

export default Routes
