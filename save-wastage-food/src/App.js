
import "./App.css";
import Header from './components/header/Header';
import MainCarousels from './components/mainCarousel/MainCarousels';
import MainNavbar from './components/navbar/MainNavbar';
import OurHistory from './components/ourHistory/OurHistory';
import OurResources from "./components/ourResources/OurResources";
import OurServices from "./components/ourServices/OurServices";
import QuickDonate from './components/quickDonate/QuickDonate';
import SpendMoney from './components/spendMoney/SpendMoney';
import WhoWeAre from './components/whoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <Header />
      <MainNavbar />
      <MainCarousels />
      <QuickDonate />
      <WhoWeAre />
      <SpendMoney />
      <OurHistory/>
      <OurServices/>
      <OurResources/>

    </div>
  );
}

export default App;
