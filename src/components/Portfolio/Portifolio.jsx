import React from 'react'
import img from '../../assets/img/img1.svg'
import img2 from '../../assets/img/img2.svg'
import img3 from '../../assets/img/img3.svg'
import img4 from '../../assets/img/img4.svg'
import img5 from '../../assets/img/img5.svg'
import img6 from '../../assets/img/img6.svg'
import img7 from '../../assets/img/img7.svg'
import img8 from '../../assets/img/img8.svg'
import './Portifolio.scss'
function Portifolio() {
  return (
    <div className='portifolio   '>
      <div className="container">
       <div className='port__inner '>
        <h3>W O R K S</h3>
        <h1>PORTFOLIO</h1>
        <p>Lorem ipsum, dolor sit amet consectetur
         adipisicing elit.</p>
         <div className='imgs d-flex justify-content-between align-items-center '>
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
         </div>
         <button  >Learn More</button>
      </div>   
      </div>
    
    </div>
  )
}

export default Portifolio