import React, {useEffect, useState} from "react";
import auth from "../config/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import './style.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [userUID, setUserUID] = useState(null);
    
   const handleLogin = async (e) =>{
        try{
            let response = await signInWithEmailAndPassword(auth, email, password);
                let userID = response.user.uid;
                console.log(userID);
                if(userID){
                    console.log("User Login Successful!");
                    setUserUID(response.user.uid);
                }
        }catch(error){
            setErrMessage(error.message);
        }
    }

    const handleSetEmail = async(e)=> {
        setEmail(e.target.value);
    }

    const handleSetPassword= async(e) =>{
        setPassword(e.target.value);
    }

    const handleLogout= async(e) =>{
        await signOut(auth);
        setUserUID(null);
    }


    useEffect(()=>{ 
            onAuthStateChanged( auth, (user) => {
                if( user ){
                    setUserUID(user.uid);
                    if(userUID){
                        console.log("Auth state changed");
                    }
                    
                }
            })           
    },[userUID] )

    return ( 
<>
{userUID ? (
    <>
            <h1>Welcome UserID: {userUID}</h1>
            <button onClick={handleLogout} >LogOut</button>
            </>
            ):(
            <>
            <div className="heading">Firebase Login Page</div>
                <div className="inputs">
                <div className="input">
                    UserName: <input className="inputType" value={email} onChange={handleSetEmail} ></input>
                </div>
                <div className="input">
                    Password: <input className="inputType" value={password} onChange={handleSetPassword} ></input>
                </div>
                    <button className="loginButton" onClick={handleLogin}>Login</button>
                </div>
                <h3>{errMessage}</h3>
            </>)}
</>   
     );
}
 
export default Login;