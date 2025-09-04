import './Navbar.css'
import logo from '../../assets/cetpa-logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'   

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Cetpa Logo" className='logo' />
      <ul className={mobileMenu ?'':'hide-mobile-menu'} >
        <li><button className='btn'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></button></li>
        <li><button className='btn'><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></button></li>
        <li><button className='btn'><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></button></li>
        <li><button className='btn'><Link to='company' smooth={true} offset={-260} duration={500}>Company</Link></button></li>
        <li><button className='btn'><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></button></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
      </ul>
      <img src={ menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
