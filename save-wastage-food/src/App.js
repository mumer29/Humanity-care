
import './App.css';
import Header from './components/header/Header';
import Carousel from './components/mainCarousel/Carousel';
import MainNavbar from './components/navbar/MainNavbar';
import QuickDonate from './components/quickDonate/QuickDonate';
import WhoWeAre from './components/whoWeAre/WhoWeAre';

function App() {
  return (
    <div className="App">
      <Header />
      <MainNavbar />
      <Carousel />
      <QuickDonate/>
      <WhoWeAre/>
    </div>
  );
}

export default App;
