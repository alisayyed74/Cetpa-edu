import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from "./Component/Hero/Hero";
import Programs from './Component/Program/Programs';
import Title from './Component/Title/Title';
import About from "./Component/About/About";
import Company from './Component/Company/Company';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import VideoPlayer from './Component/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero /> 
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Company Photos'/>
        <Company/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>  
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
