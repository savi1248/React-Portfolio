import React from 'react'
import './aboutcontentstyle.css'
const Aboutcontent = () => {
    return (
        <div className='skills'>

            <div className='about-right'>
                <h1>skills</h1>
                <div className='line'>
                    <div className='info'>
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div className='bars html'></div>
                </div>
                <div className='line'>
                    <div className='info'>
                        <span>CSS</span>
                        <span>80%</span>
                    </div>
                    <div className='bars css'></div>
                </div>
                <div className='line'>
                    <div className='info'>
                        <span>JAVASCRIPT</span>
                        <span>77%</span>
                    </div>
                    <div className='bars js'></div>
                </div>

                <div className='line'>
                    <div className='info'>
                        <span>REACT JS</span>
                        <span>70%</span>
                    </div>
                    <div className='bars react'></div>
                </div>
                <div className='line'>
                    <div className='info'>
                        <span>PYTHON</span>
                        <span>60%</span>
                    </div>
                    <div className='bars python'></div>
                </div>

            </div>


        </div>
    )
}

export default Aboutcontent