import React, { useState } from 'react'
import './Signup.css';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(signInWithEmailAndPassword(auth,email,password)
    .then(updateProfile(auth.currentUser,{displayName: username})))
    .catch((err => {
      alert(err);
    }))
  }

  return (
    <div className='signup'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmQliJRdMaDicQiq3DKNGZRZY8a-1cOkizQ&usqp=CAU" alt="" />
      <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
      <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password'/>
      <button onClick={handleSignup}>Sign up</button>
    </div>
  )
}

export default Signup
