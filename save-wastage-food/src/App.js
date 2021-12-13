
import './App.css';
import Header from './components/header/Header';
import MainCarousels from './components/mainCarousel/MainCarousels';
import MainNavbar from './components/navbar/MainNavbar';
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
    </div>
  );
}

export default App;
