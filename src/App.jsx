import About from './About'
import './App.css'
 import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './GlobalStyle'
  import GoToTop from './components/GoToTop'

//mai chahti hu ye theme provider sare component ko mile 
export default function App() {
    const theme = {
        colors:{
          white: "#000",
          black: "#fff",
        },
        media:{
          mobile: "768px",
          tab: "998px"
        },
      }
  return (
   
     <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <GoToTop></GoToTop>
       <Header></Header>
       
       
     <Routes>
      
     <Route path='/'element={<Home/>}/>
     <Route path='/about'element={<About/>}/>
       <Route path='/services'element={<Services/>}/>
         <Route path='/contact'element={<Contact/>}/>
     
     </Routes>
      
     <Footer></Footer>
    
     </ThemeProvider>
     
   
  )
}


