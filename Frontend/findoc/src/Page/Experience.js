import React from 'react'
import "./Experience.css"
import expr from '../assets/Hospital.png';
const Experience = ({item}) => {
  return (
    <>
    <h1 className="exp">Experience</h1>
      <div className="Ecard">
      <img src={expr} style={{width:"80px",height:"80px",borderRadius:"60px",marginLeft:"15px",marginTop:"21px"}} alt='error'></img>
      <h2 className="EheadF">{item.ehname}</h2>
      <p className="Esubhead">ENT Doctor - {item.erole}</p>
      <p className="Eyear">{item.eduration
      }</p>
      <p className="Elocation">{item.elocation}</p>
      </div>
    </>
  )
}

export default Experience