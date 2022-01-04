
import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => <h1>Dashboard</h1>;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ScrollButton from "./components/scrollToTopButton/ScrollButton";
// import ComponentProvider from "./components/componentProvider/ComponentProvider";
// import SignIn from './components/registrationForm/SignIn';
// import SignUp from './components/registrationForm/SignUp';
// import DashboardProvider from "./components/dashboard/DashboardProvider";
// import ForgotPassword from "./components/registrationForm/ForgotPassword";
// import MyDasdBoard from "./components/myDashboard/MyDashBoard";

// dashboard
// import Main from './components/mainDashboard/main'

function App() {

  const [inactive, setInactive] = useState(false);


  return (
    <div className="App">
    {/*<ToastContainer
    //     theame="colored"
    //     position="top-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
      // />
     

      // <Router>
      //   <Routes>
      //     <Route exact path="/" element={<ComponentProvider />} />
      //     <Route path="/sign-in" element={<SignIn />} />
      //     <Route path="/sign-up" element={<SignUp />} />
      //     <Route path="/dashboard" element={< MyDasdBoard/>} />
      //     <Route path="/forgotPassword" element={<ForgotPassword />} />
      //   </Routes>
      // </Router>
      // <ScrollButton />
    */}

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
         
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}
        </div>
      </Router>
    </div>
      </div>
  );
}

export default App;
