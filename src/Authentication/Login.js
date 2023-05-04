import React, { useState } from 'react'
import './Login.css';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase'

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

const handleLogin = () => {
  signInWithEmailAndPassword(auth,email,password)
}

  return (
    <div className='login'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmQliJRdMaDicQiq3DKNGZRZY8a-1cOkizQ&usqp=CAU" alt="" />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' value={email}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' value={password}/>
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login
