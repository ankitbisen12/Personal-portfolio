import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


const  App = () =>{
  return (
    <React.Fragment>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
