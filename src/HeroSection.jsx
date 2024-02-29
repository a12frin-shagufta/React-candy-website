import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';

import gsap from "gsap";
import { useLayoutEffect,useRef } from 'react';
const HeroSection = (props) => {
    const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
     const t1 = gsap.timeline()
     
    
     t1.from("#title-1",{
        opacity: 0,
        x: -700,
        stagger: 0.5,
        duration: 1, 
     }).from("#title-2",{
        opacity: 0,
        x: -700,
        stagger: 0.5,
        duration: 1, 
     }).from("#title-3",{
       opacity: 0,
       y: -700,
       stagger: 0.5,
       duration: 2,
     })
    },comp)
    return () => ctx.revert()
},[])
  return (
   <Wrapper ref={comp} id='page2'>
   <div className="container grid grid-two-coulmn" id='box'>
    <div className="section-hero-data">
        <h1 id="title-1"className='hero-heading'>{props.name}</h1>
        <p id='title-2' className="hero-para">
      {props.para}
        </p>
        <button id='title-2' className='btn contact-btn'>
        <NavLink className="nav_llink"  to="/contact">Contact Us</NavLink>
    </button>
    </div>
    
    <div className="section-hero-image">
        <picture >
            <img  src={props.image} alt="" className='hero-img' />
        </picture>
    </div>
   </div>

   </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 4rem 0;

.section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
}
.hero-heading{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 6.4rem;
    color: pink;
    
}
.btn{
    max-width: 16rem;
    color: pink;
    background-color: white;
    border: 3px solid pink;
    border-radius: 20px;
    
   a{
    text-align: center;
    margin-left: 20px;
    justify-content: center;
    
   }
    
}
.btn:hover{
    background-color: pink;
    transition: 0.3s;
}

.hero-para{
    margin-top: 1.5rem;
    margin-bottom: 4.4rem;
    max-width: 60rem;
}

.section-hero-image{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.8rem;
   
    
}

.picture{
   justiy-content: center;
    
.hero-img{
    max-width: 80%;
    height: 100px;
    
}

`

export default HeroSection