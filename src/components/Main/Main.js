

import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'

const Main = () => {

    const {children} = props
  return (
    <main>
        <Carousel/>
        <Navbar/>
    </main>
  )
}

export default Main