
import './App.css';
import Header from './components/header/Header';
import Carousel from './components/mainCarousel/Carousel';
import MainNavbar from './components/navbar/MainNavbar';
import QuickDonate from './components/quickDonate/QuickDonate';

function App() {
  return (
    <div className="App">
      <Header />
      <MainNavbar />
      <Carousel />
      <QuickDonate/>
    </div>
  );
}

export default App;
