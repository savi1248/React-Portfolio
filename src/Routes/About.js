import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Aboutcontent from '../components/Aboutcontent'
import Timeline from '../components/Timeline'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading='ABOUT'
        text="I'm a friendly Front-end Devoloper" />
      <Timeline />
      <Aboutcontent />
      <Footer />

    </div>
  )
}

export default About