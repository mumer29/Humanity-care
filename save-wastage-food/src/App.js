
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from "./components/scrollToTopButton/ScrollButton";
import ComponentProvider from "./components/componentProvider/ComponentProvider";
import SignIn from './components/registrationForm/SignIn';
import SignUp from './components/registrationForm/SignUp';
import ForgotPassword from "./components/registrationForm/ForgotPassword";
import MyDasdBoard from "./components/myDashboard/MyDashBoard";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";


function App() {

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
          <Route path="/dashboard" element={< Layout/>} />
          <Route path="/dashboard1" element={< Dashboard/>} />
          <Route path="/dashboard2" element={< Customers/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ScrollButton />
    </div>
  )
}


export default App;
