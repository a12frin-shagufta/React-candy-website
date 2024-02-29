import React from 'react';
import './CardGrid.css';
import gsap from "gsap";
import { useLayoutEffect,useRef } from 'react';
function CardGrid() {
  
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
     const t1 = gsap.timeline()
     
    
    gsap.from("#page2 #box",{
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 1,
        
        scrollTrigger:{
            trigger: "#page2 #box",
            scroller: "body"
    
        
        }
    
    })
    },comp)
    return () => ctx.revert()
},[])


  
  
  

  return (
    
    <div ref={comp} className='top' id='page2'>
      
      
    <div className="card-list" id='box'>
    
      <a id="title-1" href="#" className="card-item">
        <img src="/images/mashmellow.webp" alt="Card Image" />
        <span className="developer">$68</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>
      <a id="title-2" href="#" className="card-item">
        <img src="/images/dark.webp" alt="Card Image" />
        <span className="designer">$20</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>
      <a id='title-3' href="#" className="card-item">
        <img src="/images/gummy.webp" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>
    
      <a href="#" className="card-item">
        <img src="/images/berries.webp" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>

      <a href="#" className="card-item">
        <img src="https://www.fnp.com/images/pr/l/v20200831125332/heavenly-butterscotch-cake-half-kg_1.jpg" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>
      <a href="#" className="card-item">
        <img src="https://bkmedia.bakingo.com/sq-set-of-6-multi-flavored-cupcakes-cupc1773flav-A_2.jpg?tr=w-320,h-320,dpr-2,q-70" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>
     
      </div>
    </div>
 
  );
}

export default CardGrid;