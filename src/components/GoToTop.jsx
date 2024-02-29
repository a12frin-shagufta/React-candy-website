import React from 'react'

const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
    }
  return (
   <div className="top-btn" onClick={goToBtn}></div>
  )
}

export default GoToTop