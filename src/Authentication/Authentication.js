import React, {useState} from 'react'
import './Authentication.css';
import Login from './Login';
import Signup from './Signup';

function Authentication() {
  const [active,setActive] = useState("login");
  const handleChange = () => {
    setActive( active === "login" ? "signup" : "login");
  }
  return (
    <div className='authentication'>
      <div className='auth_left'>
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className='auth_right'>
        {active === "login" ? (<Login/>) : (<Signup/>)}
        <div className="div auth_more">
          <span>
            {active === "login" ? (<>Dont have an account <button onClick={handleChange}>Sign Up</button></>)
             : (<>have an account <button onClick={handleChange}>Log in</button></>) 
             }
             </span>
        </div>
      </div>
    </div>
  )
}

export default Authentication
