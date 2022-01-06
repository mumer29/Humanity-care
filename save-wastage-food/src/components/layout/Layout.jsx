import React, { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import DashboardRoutes from '../Routes'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'
import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <div>
            <h1>dashboard</h1>
        </div>
        // <Routes>
        //     <Route render={(props) => (
        //         <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        //             <Sidebar {...props} />
        //             <div className="layout__content">
        //                 <TopNav />
        //                 <div className="layout__content-main">
        //                     <DashboardRoutes />
                            
        //                      {/* <Route path="/" element={<Dashboard />} />
        //                      <Route path="/customers" element={<Customers />} /> */}

        //                 </div>
        //             </div>
        //         </div>
        //     )} />
        // </Routes>
    )
}

export default Layout
