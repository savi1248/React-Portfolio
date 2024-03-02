import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Pricingcard from '../components/Pricingcard'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading='PROJECTS'
      text='some of my projects'/>
      <Work />
      <Pricingcard />  
     <Footer />
    </div>
  )
}

export default Projects