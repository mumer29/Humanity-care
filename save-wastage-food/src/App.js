
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Locations from "./components/locations/Locations";
import MainCarousels from './components/mainCarousel/MainCarousels';
import Navbar from "./components/navbar/MainNavbar";
import OurHistory from './components/ourHistory/OurHistory';
import OurResources from "./components/ourResources/OurResources";
import OurServices from "./components/ourServices/OurServices";
import QuickDonate from './components/quickDonate/QuickDonate';
import SpendMoney from './components/spendMoney/SpendMoney';
import PatientDonnerStories from "./components/stories/PatientDonnerStories";
import Testimonial from "./components/testimonial/Testimonial";
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import ScrollButton from "./components/scrollToTopButton/ScrollButton";
import ComponentProvider from "./components/componentProvider/ComponentProvider";
import SignIn from './components/registrationForm/SignIn';
import SignUp from './components/registrationForm/SignUp'

function App() {
  return (
    <div className="App">
      <ToastContainer
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
      <ToastContainer theme="colored" />
      <Router>
        <Routes>
          <Route exact path="/" element={<ComponentProvider />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      <ScrollButton />

    </div>
  );
}

export default App;
