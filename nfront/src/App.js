import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import the components that we create
import ResortInfo from './components/resortInfo';
import Navbar from './components/Navbar';
import CarouselSection from './components/CarouselSection';

// This will be the starting point, or the root, of the frontend page. 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselSection/> 
      <ResortInfo/>
    </div>
  );
}

export default App;
