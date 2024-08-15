import React from 'react'
import "./Feature.css"
const Feature = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <img src='https://graph.org/file/f47f205892de99c43fe2d.jpg' width={"1519px"} alt='error'></img>
    <div style={{position:"absolute",left:"1020px",top:"1620px"}}>
    <h1>Why Choose Us</h1>
    <ol style={{lineHeight:"51px"}}>
    <li style={{fontSize:"25px"}}>Easy to find physician 
    </li>
    <li style={{fontSize:"25px"}}>High transparency
    </li>
    <li style={{fontSize:"25px"}}>Appointment Scheduling
    </li>
    <li style={{fontSize:"25px"}}>Seamless Interagation
    </li>
    </ol>
    <button className='Cbtn'>Explore</button>
    </div>
    </>
  )
}

export default Feature