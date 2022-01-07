import React from 'react'

import { Route, Switch  } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/dashboard/customers' component={Customers} />
            <Route path='/dashboard/products' component={Products} />
        </Switch>
    )
}

export default Routes
