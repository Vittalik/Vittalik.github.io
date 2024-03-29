import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

import logo from "../images/croppedLogo.png"


const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  };

  //console.log(inputs)

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/");
    }catch(err){
      setError(err.response.data);
    }
  };



  return (
    <div className='auth'>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <h1>Login</h1>
      <form>
      <div className='logo'>
          <img src={logo} alt='Logo CSM' height="60" width="50"></img>
        </div>
        <input required type="text" placeholder='username' name="username" onChange={handleChange}/>
        <input required type="password" placeholder='password' name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account? <Link to="/register">Register</Link></span> 
      </form>
    </div>
  )
}

export default Login