import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const submitAPI = function(formData){
    return true;
  }

  const navigate = useNavigate();

  function submitForm(formData){
    if (submitAPI(formData)){
      navigate("/confirmation");
    }
  }

  return (
    <main>
      <Nav />
      <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/booking" element={<Booking SubmitForm={submitForm}/>}/>
          <Route path="/confirmation" element={<Confirmation />}/>
      </Routes>
      <ContactUs />
      <Footer />
    </main>
);
}

export default App;
