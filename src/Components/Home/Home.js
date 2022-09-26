import React from 'react'
import Banner1 from '../Banners/Banner1/Banner1'
import Banner2 from '../Banners/Banner2/Banner2'
import Banner3 from '../Banners/Banner3/Banner3'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </div>
  )
}

export default Home
