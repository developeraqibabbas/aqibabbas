import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Service from './components/Service';
import Latest from './components/Latest'
import Resume from './components/Resume'
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Latest></Latest>
      <Resume></Resume>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div> 
  );
}

export default App;
