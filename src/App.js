
import './App.css';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Feq from './components/Feq';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';
import Banner from './components/Banner';
import NextTrip from './components/NextTrip';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Carousel/>
    <Feq/>
    <BookingSteps/>
    <Banner/>
    <NextTrip/>
    <Footer/>
    </div>
  );
}

export default App;
