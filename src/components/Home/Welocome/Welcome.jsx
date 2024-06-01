import React from 'react'
import headimg from '../../../assets/img/head.svg' 
import './Welcome.scss'
function Welcome() {
  return (
    <div className='Welcome   '  >
      <div className='container d-flex justify-content-between align-items-center hero__top'> 
      <div className='hero 	 '>
        <h3>W E L C O M E</h3>
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
        <button className='btn'>Explore</button>
        </div>
        <div className='hero '>
          <img src={headimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Welcome