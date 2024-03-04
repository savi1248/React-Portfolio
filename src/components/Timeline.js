import React from 'react'
import './timelinestyle.css'

const Timeline = () => {
    return (
        <div>
            <section className='timeline'>
                <div className='timeline-row'>
                    <div className='timeline-column'>
                        <h1 className='title'>Experience</h1>
                        <div className='timeline-box'>
                           
                            <div className='timeline-content'>
                                <div className='content'>

                                    <div className='year'>
                                        <div className='year-image'>
                                            <img src='https://media.licdn.com/dms/image/D560BAQHBHWu0opSwJQ/company-logo_200_200/0/1685498259592/senchola_university_logo?e=1712793600&v=beta&t=OX5ne-HB3v3pEahjcrDou7m8A22uNjjxuk_TF2Ck0As' className='content-img' alt="" />
                                            <div className='item'>
                                                <div className='role'>Frontend Developer</div>
                                                <div className='com'> Senchola University </div>

                                                <div className='date'>  July 2023 - Oct 2023 </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>Having 3-months internship Experience at Senchola University as a Frontend Developer. Skills are React.js, JavaScript, HTML, CSS and BootstrapCollaboration on team Projects like Netflix Clone.Creating individual Projects such as e-commerce and Tami Nadu tourist website, Cartoon website Ricky Morty etc..,</p>
                                        <br></br>
                                        <div className='exp-skills'>
                                            <b style={{ fontSize: '18px' }}>Skills:</b>
                                            <div className='skill-items'>
                                            <span>. HTML</span>
                                                <span>. CSS</span>
                                                <span>. JavaScript</span>
                                                <span>.  Bootstrap </span>
                                                <span>. ReactJs</span>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='timeline-content'>
                                <div className='content'>

                                    <div className='year'>
                                        <div className='year-image'>
                                            <img src='https://myinforum.org/wp-content/uploads/2020/02/Harman-logo.png' className='content-img' alt="" />
                                            <div className='item'>
                                                <div className='role'>Test Engineer</div>
                                                <div className='com'> Harman connected services </div>
                                                <div className='date'>  2022-2023 </div>
                                                

                                            </div>
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        <p>Working as Regression analysis for all th SD-WAN features and providing support to team members.Working on the modules like Routing (Sub jobs is OSPF, BGP, IBGP), VPN, NVS.</p>
                                        <br></br>
                                        <div className='exp-skills'>
                                            <b style={{ fontSize: '19px' }}>skills:</b>
                                            <div className='skill-items'>
                                                <span>. Python (Programming Language) </span>
                                                <span>. Networking</span>
                                                <span>. Regression testing </span>
                                                <span>. Software Testing Life Cycle (STLC) </span>
                                                <span>. Jenkins </span>
                                                <span>. Linux </span>
                                                <span>.  docker </span>
                                                <span>.  Jira </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Timeline