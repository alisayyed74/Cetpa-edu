import React from 'react'
import './Hero.css'
import dark_arrow from'../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="her-text">
        <h1>We Ensure Quality Education for a better Future and World</h1><br />
        <p>Our cutting-edge curriculum is designed to equip students with the skills they need to succeed in a rapidly changing world.</p>
        <br />
        <button className='btn'>Get Started <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
