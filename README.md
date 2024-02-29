# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



.grid{
    display: grid;
    gap: 9rem;
}

.grid-two-column{
    grid-template-columns: repeat(2,1fr);

}

import gsap from "gsap";
import { useLayoutEffect,useRef } from 'react';
const comp = useRef(null)
ref={comp}

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




    <div className='top'>
      <h1 className='top-heading'>BUY CANDY</h1>
    <div className="card-list">
      
      <a href="#" className="card-item">
        <img src="/images/mashmellow.webp" alt="Card Image" />
        <span className="developer">$68</span>
        <h3>A "developer" codes software and websites.</h3>
        
      </a>
      <a href="#" className="card-item">
        <img src="/images/dark.webp" alt="Card Image" />
        <span className="designer">$20</span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        
      </a>
      <a href="#" className="card-item">
        <img src="/images/gummy.webp" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        
      </a>

      <a href="#" className="card-item">
        <img src="/images/berries.webp" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        
      </a>

      <a href="#" className="card-item">
        <img src="https://www.fnp.com/images/pr/l/v20200831125332/heavenly-butterscotch-cake-half-kg_1.jpg" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        
      </a>
      <a href="#" className="card-item">
        <img src="https://bkmedia.bakingo.com/sq-set-of-6-multi-flavored-cupcakes-cupc1773flav-A_2.jpg?tr=w-320,h-320,dpr-2,q-70" alt="Card Image" />
        <span className="editor">$10</span>
        <h3>An "editor" ensures content quality and accuracy.</h3>
        
      </a>
    </div>
    </div># react-candy-website
