import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
// import Main from './components/Main';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Nav />
             <Routes>
                 <Route path="/" element={<Header />}/>
                 <Route path="/booking" element={<Booking />}/>
                 <Route path="/confirmation" element={<Confirmation />}/>
             </Routes>
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </main>
);
}

export default App;
