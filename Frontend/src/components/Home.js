import React from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import the components that we create
import ResortInfo from './resortInfo';
import Navbar from './Navbar';
import CheckAvailabilityNavbar from './CheckAvailabilityNavbar';
import CarouselSection from './CarouselSection';

// Landing page component.
function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <CarouselSection/> 
      <CheckAvailabilityNavbar/>
      <ResortInfo/>
    </div>
  );
}

export default Home;
