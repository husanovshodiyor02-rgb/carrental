import React from 'react'
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Dreams from './components/Dreams'
import Hear from './components/Hear'
import Brands from './components/Brands';
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CarCard from './components/CarCard';

const App = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Dreams/>
      <CarCard/>
      <Hear/>
      <Brands/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App