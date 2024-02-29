import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from 'styled-components';
const Header = () => {
  return (
    <MainHeader>
    <NavLink className="logo" to="/">
     <img src="https://houseofcandy.in/cdn/shop/files/logo_2_7325edbd-6cde-43df-9c57-5a335da4f2d8_230x.png?v=1666258075" alt="" />
    </NavLink>
    <Navbar/>
    
    </MainHeader>
  )
}
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 12rem;
margin-top: 30px;
display: flex;
align-items: center;
justify-content: space-between;
min


  
  .logo{
    h2{
      font-size: 29px;
      color: #fff;
      text-decoration: none;
      list-style: none;
    }
  }




`;
export default Header;