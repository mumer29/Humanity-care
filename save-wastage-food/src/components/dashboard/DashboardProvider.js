import React from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

function DashboardProvider() {
    return (
        <div>
           <Header/>
           <SideBar/>
           <Content/>
        </div>
    )
}

export default DashboardProvider
