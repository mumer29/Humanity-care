
import "./App.css";
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

function App() {
  return (
    <div className="App">
      <Header/>
        <Navbar />
        <MainCarousels />
        <QuickDonate />
        <WhoWeAre />
        <OurHistory />
        <OurServices />
        <SpendMoney />
        <OurResources />
        <PatientDonnerStories />
        <Testimonial />
        <Locations />
        <ContactUs />
        <Footer />
        <ScrollButton />

    </div>
  );
}

export default App;
