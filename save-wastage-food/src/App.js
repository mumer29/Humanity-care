
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollButton from "./components/scrollToTopButton/ScrollButton";
import ComponentProvider from "./components/componentProvider/ComponentProvider";
import SignIn from './components/registrationForm/SignIn';
import SignUp from './components/registrationForm/SignUp';
// import DashboardProvider from "./components/dashboard/DashboardProvider";

// dashboard
// import Main from './components/mainDashboard/main'

function App() {



  return (
    <div className="App">
     { /* <Main /> */}
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
      {/* Same as */}

     {/*<Main /> */}

      <ToastContainer theme="colored" />
      <Router>
        <Routes>
          <Route exact path="/" element={<ComponentProvider />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          { /* <Route path="/dashboard" element={<DashboardProvider />} />*/}
        </Routes>
      </Router>
      <ScrollButton />

    </div>
  );
}

export default App;
