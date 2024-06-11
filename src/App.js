import './App.css';
import Nav from './components/Nav';
// import Header from './components/Header';
// import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Nav />
      <Confirmation />
      <ContactUs />
      <Footer />
  </main>
);
}

export default App;
