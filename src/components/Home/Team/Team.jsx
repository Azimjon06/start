import React from 'react'
import per from '../../../assets/img/person1.svg'
import pers from '../../../assets/img/person2.svg'
import pero from '../../../assets/img/person3.svg'
import pern from '../../../assets/img/person.4.svg'
import './Team.scss'


function Team() {
  return (
    <div className='team text-center'>
        <h3>T E A M</h3>
        <h1>Our Talents</h1>
        <p>Lorem ipsum, dolor sit amet consectetur <br />
           Suscipit nemo hic quos, ab,</p>

        <div className="cards d-flex justify-content-around align-item-center">
            <div className="card"><img src={per} alt="" />
            <p>Peg Legge</p>
            <span>CEO</span>
            </div>
            <div className="card"><img src={pers} alt="" />
            <p>Richard Guerra</p>
            <span>CEO</span>
            </div>
            <div className="card"><img src={pero} alt="" />
            <p>Alexandra Stolz</p>
            <span>DESIGNER</span>
            </div>
            <div className="card"><img src={pern} alt="" />
            <p>Janet Bray</p>
            <span>DEVELOPER</span>
            </div>
        </div>
        <button>View Team</button>
    </div>
  )
}

export default Team