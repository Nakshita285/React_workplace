import React, { useState } from 'react';
import "./style.css";
import auth from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {
    let [userName, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [password, setPassword] = useState("");
    let [errMessage, setErrMessage] = useState("");

    const handleSignUp = async(e)=>{
        try{
            let response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch(error){
            
            const errorMessage = error.message;
            setErrMessage(errorMessage);
            console.log("Error Message:" + errorMessage);
        }
    }


  return (
    <div className='signUpContainer'>
     <div className="heading">Firebase Sign-up Page</div>
      <div className='inputs'>
        <div className='input'>
            Name: <input className="inputType" value={userName} onChange={(e)=>{setUsername(e.target.value)}}></input>
        </div>
        <div className='input'>
            Email: <input className="inputType" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        <div className='input'>
            Mobile: <input className="inputType" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></input>
        </div>
        <div className='input'>
            Password: <input className="inputType" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button type="submit" className="signupButton" onClick={handleSignUp}>Sign Up</button>
      </div>
        <h3>{errMessage}</h3>
    </div>
  )
}

export default SignUp
