import React from 'react'
import './aboutcontentstyle.css'
import { Link } from 'react-router-dom'

import react2 from '../assets/react2.png'

const Aboutcontent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>About me.</h1>
                <p>Im a react front-end devoloper.
                    I create a responsive secure websites for my clients.</p>
                <Link to='/contact' >
                    <button className='btn'>CONTACT</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    {/* <div className='img-stack top'>
                        <img src={react1} className='img' alt="true" />
                    </div> */}
                    <div className='img-stack bottom'>
                        <img src={react2} className='img' alt="true" />
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Aboutcontent