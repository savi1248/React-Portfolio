import './footerstyle.css'
import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{
                            color: '#fff',
                            marginRight: '2rem'
                        }} />
                        <div>
                            <p>No 20 Gandhi Nagar</p>
                            <p>Chennai.</p>
                        </div>

                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{
                                color: '#fff',
                                marginRight: '2rem'
                            }} />
                            6385341458
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{
                                color: '#fff',
                                marginRight: '2rem'
                            }} />
                          savithaanbu00@gmail.com
                        </h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About me</h4>
                    <p>This is savitha,an Aspiring web devoloper , i enjoy discussing new projects and design challenges.</p>
                    <div className='social'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook
                                size={30} style={{
                                    color: '#fff',
                                    marginRight: '1rem'
                                }}
                            />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram
                                size={30} style={{
                                    color: '#fff',
                                    marginRight: '1rem'
                                }}
                            />
                        </a>
                        <a href="https://github.com/savi1248" target="_blank" rel="noopener noreferrer">
                            <FaGithub
                                size={30} style={{
                                    color: '#fff',
                                    marginRight: '1rem'
                                }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/savitha-a-34559a1ab/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                size={30} style={{
                                    color: '#fff',
                                    marginRight: '1rem'
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer