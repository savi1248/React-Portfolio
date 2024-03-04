import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Work from '../components/Work';
import Intropage from '../components/Intropage';
const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* <Hero /> */}
      <Intropage />
      <Work />
      <Footer />
    </div>
  )
}

export default Home