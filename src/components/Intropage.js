import React from 'react'
import './intropage.css'
import { Link } from 'react-router-dom'
import profileimg from '../assets/photo.jpeg'

const Intropage = () => {
    return (
        <main className='main'>
                   
            <div className='main-container'>
                
                <div className='main-content'>
                    <p className='main-subtitle'>Hi,</p>
                        <h1 className='main-title'>
                            I'm <span>savitha<br /></span>Web Developer
                        </h1>
                        <p className='description'>
                            As a Passionate Front-End Developer with a strong Knowledge in web development, user interface design, HTML, CSS, Bootstrap, JavaScript and React.js. I bring valuable internship experience in creating responsive and user-friendly interfaces.
                        </p>
                        <div >
                            
                            <a href='https://drive.google.com/file/d/19NzqdJBaZgUwYiEKWMAoGM9QZ5lIQjS6/view?usp=drivesdk' className='btn'>CV Download</a>
                            
                            <Link to='/about' className='btn btn-light'> About me</Link>
                        </div>
                    </div>
                     <div className='main-image'>
                          <img src={profileimg} alt='profiles' className='main-img'/>
                     </div>
                </div>
            
        </main>
    )
}

export default Intropage