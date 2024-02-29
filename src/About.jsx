import React from 'react'
import HeroSection from './HeroSection'
const About = () => {
    const data = {
       name: "House of Candy",
       image: "/images/about.jpg",
       para: "Find the candy you need quickly on our easy-to-use website. Our large selection of bulk candy covers everything you'll need to build a candy buffet, stock your candy store, or load your vending machines. Don't forget to buy yourself a little something too!",
    }
  return (
   <HeroSection {...data}/>
  )
}

export default About