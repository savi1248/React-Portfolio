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
                        Experienced in testing domains with a passion for frontend development. I am seeking to transition into a front-end developer role. I am proficient in HTML, CSS, Bootstrap, JavaScript (including ES6), and React JS. I bring valuable internship experience for creating user-friendly and responsive web interfaces.

                    </p>
                    <div >

                        <a href='https://drive.google.com/file/d/1-F5dVwjh2GeivRbcQppw5N1Eex5SWJRY/view?usp=drivesdk' target='_blank' className='btn'>CV Download</a>

                        <Link to='/about' className='btn btn-light'> About me</Link>
                    </div>
                </div>
                <div className='main-image'>
                    <img src={profileimg} alt='profiles' className='main-img' />
                </div>
            </div>

        </main>
    )
}

export default Intropage