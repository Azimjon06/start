import React from 'react'
import './Hero_top.scss'
import top  from '../../../assets/img/hero.svg'

function Hero_top() {
  return (
    <div className='herotop  '>
      <div className='container'>
      <div className=' mid  d-flex align-items-center justify-content-between'>
           <img src={top} alt="" />
        <div className='hero__text'>
            <h1>Lorem ipsum dolor sit <br /> amet consectetur </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, br dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button>Learn More</button>
        </div>  
        </div>
      </div>
       
    </div>
  )
}

export default Hero_top