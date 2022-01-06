
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
  
            {/* <Switch>
              <Route exact path={"/"}>
                <Dashboard />
              </Route>
              <Route exact path={"/content"}>
                <Content />
              </Route>
              <Route path={"/content/courses"}>
                <Courses />
              </Route>
              <Route path={"/content/videos"}>
                <Videos />
              </Route>
              <Route path={"/design"}>
                <Design />
              </Route>
              <Route exact path={"/content-2"}>
                <Content2 />
              </Route>
              <Route path={"/content-2/courses"}>
                <Courses2 />
              </Route>
              <Route path={"/content-2/videos"}>
                <Videos2 />
              </Route>
              <Route path={"/design-2"}>
                <Design2 />
              </Route>
            </Switch> */}
          </div>
        </Router>
      </div>
      </div>
    );
  }
  
  export default App;
  