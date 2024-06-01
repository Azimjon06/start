import React from 'react'
import Welcome from '../../components/Home/Welocome/Welcome'
import Partners from '../../components/Home/Partners/Partners'
import Hero_top from '../../components/Home/Hero_top/Hero_top'
import Hero_but from '../../components/Home/Hero_but/Hero_but'
import Team from '../../components/Home/Team/Team'

function Home() {
  return (
   <div className='Home '>
    <Welcome/>
    <Partners/>
    <Hero_top/>
    <Hero_but/>
    <Team/>
   </div> 
  )
}

export default Home