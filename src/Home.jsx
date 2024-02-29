import HeroSection from "./HeroSection";

import Services from "./Services";
import About from "./About";

const Home = () => {
  const data = {
    name: "Candy World",
    image: "/images/cake.png",
    para: "Open your doors to the world of premium candies in India with House of Candy Perfect sweet delectables for any occasion. Various quantity options to order from. Buy our bestsellers - Gummy Bears, Marshmallows, Chocolates and more.",
  }
    return (
      <>
      <HeroSection {...data}></HeroSection>
      <Services/>
      <About/>
      
      
      </>
    )
  }
  export default Home;