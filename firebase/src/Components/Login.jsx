import React, {useState} from "react";
import auth from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './style.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
   const handleLogin = async (e) =>{
    try{
        e.preventDefault();
        let response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user.uid);
    }catch(error){
        setMessage(error.message);
    }
    
    }

    return ( 
<>
    <div className="heading">Firebase Login Page</div>
    <div className="inputs">
    <div className="input">
        UserName: <input className="inputType" value={email} onChange={(e)=>{setEmail(e.target.value)}} ></input>
    </div>
    <div className="input">
        Password: <input className="inputType" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
    </div>
        <button className="loginButton" onClick={handleLogin}>Login</button>
    </div>
    <h3>{message}</h3>
</>
        
     );
}
 
export default Login;