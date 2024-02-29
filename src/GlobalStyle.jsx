import { createGlobalStyle} from 'styled-components';
 const GlobalStyle = createGlobalStyle`


*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
}

html{
 font-size: 70.5%;
}

  

a{
    text-decoration: none;
    color: #000;
    font-size: 1.8rem;
}





.container{
    max-width: 120rem;
    margin: 0 auto;
   
}

.grid{
    display: grid;
    gap: 9rem;
    grid-template-columns: repeat(2,1fr);

}


    


.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}




 `;
export default GlobalStyle;