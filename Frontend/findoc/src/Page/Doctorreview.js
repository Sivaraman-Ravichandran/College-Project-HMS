import React from 'react'
import "./Doctorreview.css"
import review from '../assets/person-circle.svg';
const Doctorreview = ({item}) => {
  return (
    <>
    <div className='Review'>
    <h1 className="rev">Review</h1>
    <div className="Rcard">
      <img src={review} style={{width:"80px",height:"80px",borderRadius:"60px",marginLeft:"15px",marginTop:"21px"}} alt='error'></img>
      <h2 className="RheadF">{item.rname}</h2>
      <p className="Rsubhead">{item.rdate}</p>
      <p className="Ryear">{item.rdesc}</p>
      </div>
      </div>
    </>
  )
}

export default Doctorreview