import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
const Navbar = () => {
  const Nav = styled.nav`
   .navbar-list{
    display: flex;
    gap: 50px;
    
    
   
     

    li{
     
      list-style: none;
      
      .navbar-link{
        text-decoration: none;
        list-style: none;
        color: #000;
        font-size: 20px;
        
          
          .navbar-link :hover, &.active{
            color: pink;
            transition: color 0.3s linear;
          
        

        }
      }
      
    }
    
    }


   
   }
`;
  return (
    <Nav>
    <div className="manu-icon">
    <ul className="navbar-list">
    <li>
    <NavLink className="navbar-link" to="/">Home</NavLink>
    </li>
      <li>
      <NavLink className="navbar-link" to="/about">About</NavLink>
      </li> 
      <li>
      <NavLink className="navbar-link" to="/services">Buy Candy</NavLink>
      </li>
      <li>
      <NavLink className="navbar-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
    </div>

    
    
    </Nav>
  )
 
}

export default Navbar;