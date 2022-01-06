
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from './redux/actions/ThemeAction';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';

import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/topnav/TopNav';
import DashboardRoutes from './components/Routes';


import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes, Outlet, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from "./components/scrollToTopButton/ScrollButton";
import ComponentProvider from "./components/componentProvider/ComponentProvider";
import SignIn from './components/registrationForm/SignIn';
import SignUp from './components/registrationForm/SignUp';
import ForgotPassword from "./components/registrationForm/ForgotPassword";
// import MyDasdBoard from "./components/myDashboard/MyDashBoard";
import Layout from "./components/layout/Layout";
import Topnav from "./components/topnav/TopNav";



function App() {

  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    dispatch(ThemeAction.setMode(themeClass))

    dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])



  function Dashboard1() {
    return (
      <div>
        <h1>Dashboard</h1>
        <nav>
          <Link to="dash">dash</Link>{" "}
          <Link to="customers">customers</Link>{" "}
          <Link to="sidebar">sidebar</Link>{" "}
          <Link to="topnav">topnav</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }


  return (
    <div className="App">
      <ToastContainer
        theame="colored"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        <Routes>
          <Route exact path="/" element={<ComponentProvider />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />


          <Route path='dashboard' element={<Dashboard1 />} >
            <Route path='topnav' element={<Topnav />} />
            <Route path='dash' element={<Dashboard />} />
            <Route path='customers' element={<Customers />} />
            <Route path='sidebar' render={(props) => (
              <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar {...props} />
                <div className="layout__content">
                  <TopNav />
                  <div className="layout__content-main">
                    {/* <DashboardRoutes/> */}
                    <Outlet />
                  </div>
                </div>
              </div>
            )} 
             />
          </Route>
          {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
        </Routes>
      </Router>
      <ScrollButton />

    </div>
  )
}


export default App;
