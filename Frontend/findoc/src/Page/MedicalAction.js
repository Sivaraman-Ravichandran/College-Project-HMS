import React from 'react'

const MedicalAction = ({item}) => {
    if(!Array.isArray(item)){
    console.log("The item passed to MedicalAction is  an array:", item)
    return null;  
  }
  return (
    <>
    <div style={{position:"absolute",top:"760px",left:"1050px",width:"420px",height:"340px",backgroundColor:"white",borderRadius:"20px",boxShadow:"0 4px 8px 3px rgba(0, 0, 0, 0.2)"}}>
      <h1 style={{fontSize:"28px",paddingLeft:"106px",paddingTop:"15px"}}>Medical Actions</h1>
      <ul style={{paddingLeft:"60px",display:"block",gap:"20px"}}>
     
       { item.map((d,index)=>(
         <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",marginTop:"25px",marginLeft:"32px"}} key={index}>{d}</li>

       ))
         
     
       }
      
       

      </ul>
      <input type="button" value="Make Appoinment" onclick="msg()" style={{width:"170px",height:"50px",marginLeft:"125px",backgroundColor:"green",color:"white",borderRadius:"10px",marginTop:"10px"}}></input>
      </div>
    </>
  )
  

}

export default MedicalAction