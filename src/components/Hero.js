import React from 'react'
import Introimg from '../assets/bg-img.jpg'
import profileimg from '../assets/photo.jpeg'
import { Link } from 'react-router-dom'
import './herostyle.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
         <img className='into-img' 
          src={Introimg} alt='Introimg'
         />
        </div>
        <div className='content'>
        <p>Hi, I'm a FrontEnd Developer</p>
            <img 
             className='into-profile' 
             src={profileimg} alt='Introimg'
            
            />
           {/* <p>Hi, I'm a FrontEnd Developer</p> */}
            <h1>Web Developer</h1>
            
            <div >
           <Link to='/project' className='btn'> Projects</Link>
           <Link to='/about' className='btn btn-light'> About</Link>
        </div>
        </div>
        
    </div>
  )
}

export default Hero