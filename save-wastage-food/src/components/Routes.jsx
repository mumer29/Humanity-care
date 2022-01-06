import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const DashboardRoutes = () => {
    return (
            <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/customers' component={Customers} />
            </div>
    )
}

export default DashboardRoutes
