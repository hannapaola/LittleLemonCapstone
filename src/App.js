import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import icon from "./images/greenLemon.png"
import ogImage from './images/menu.jpg';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {

  const title = "Little Lemon Capstone";
  const description = "Capstone for the Meta Front-End Developer Professional Certificate";

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
    <div>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="description" content={description} />
      </Helmet>
      <Nav />
      <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/booking" element={<Booking SubmitForm={submitForm}/>}/>
          <Route path="/confirmation" element={<Confirmation />}/>
      </Routes>
      <ContactUs />
      <Footer />
    </div>
);
}

export default App;
