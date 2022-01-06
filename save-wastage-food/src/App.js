
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
          <Route path="/dashboard/*" element={< Layout />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ScrollButton />
    </div>
  )
}


export default App;
