import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import about_img from "../../assets/about.png";


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      {/* Left Side */}
      <div className="about-left">
        <img src={about_img} alt="About" className='about-img' />
        <img src={play_icon} alt="Play Icon" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>

      {/* Right Side */}
      <div className="about-right">
        <h2>ABOUT CETPA INFOTECH COMPANY</h2>
        <h3>Leading Training Institute</h3>
        <p>
          Cetpa Infotech is a leading training institute that offers a wide range 
          of courses in various domains such as software development, data science, 
          and digital marketing. Our mission is to provide high-quality education 
          and training to help individuals and organizations achieve their goals.
        </p>
        <p>
          With a team of skilled developers, engineers, and innovators, we provide 
          end-to-end technical support tailored to client needs. We believe in 
          quality, performance, and long-term partnerships to drive success in the 
          modern digital world.
        </p>
        <p>
          At Cetpa Infotech, we are committed to fostering a culture of continuous 
          learning and improvement. We encourage our students to stay updated with 
          the latest industry trends and technologies, ensuring they are well-prepared 
          for the challenges of the future.
        </p>
      </div>
    </div>
  )
}

export default About
