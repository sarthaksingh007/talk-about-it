import React, { useState } from 'react'
import "./Join.css";
// import logo from "../../images/logo.png"; 
import {Link} from "react-router-dom";

let user;


const Join = () => {
  
    const [name,setname]=useState("");
    // console.log(name);  

    const sendUser=()=>{
        user=document.getElementById('joinInput').value;
        document.getElementById('joinInput').value="";
    }
    
  return (
    <div className='JoinPage'>
      <div className="JoinContainer">
      <h1 className='heading'>Talk<span className='spann'>about</span>it</h1>
        <input onChange={(e)=>setname(e.target.value)} placeholder='Enter your name ' type="text" id="joinInput"/>
       <Link onClick={(event)=> !name ?event.preventDefault():null} to="/chat"> <button onClick={sendUser} className='joinbtn'>Login</button></Link>
      </div>
    </div>
  )
}

export default Join
export {user}
