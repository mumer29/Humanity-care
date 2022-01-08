
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from './redux/actions/ThemeAction';
// import Dashboard from './pages/Dashboard';
// import Customers from './pages/Customers';

import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/topnav/TopNav';
import Routes from './components/Routes';


import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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






  return (
    <div className="App">
      {/* <ToastContainer
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
      /> */}
      <ToastContainer theme="colored"/>
      

      <Router>

        <Route exact path="/" component={ComponentProvider} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path='/dashboard' render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )} />
        <Route path="/forgotPassword" component={ForgotPassword} />

      </Router>
      <ScrollButton />

    </div>
  )
}


export default App;
