import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="login" onSubmit={(e) => {
      e.preventDefault()
      props.handleLogin(formData)
    }}>
      <label>
        Username
        <br/>
      <input type='text' name='username' value={formData.username} onChange={handleChange}/>
      </label>
      <label>
        Password
        <br/>
      <input type='password' name='password' value={formData.password} onChange={handleChange}/>
      </label>
      <p>Don't have an account? <Link className="login-link" to='/register'>Register</Link></p>
      <button>Login</button>
    </form>
  )
}