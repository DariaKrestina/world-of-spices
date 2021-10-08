import React from "react";
import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    email: '',
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
    <div>
      <h1>Create Account</h1>
    <form onSubmit={(e) => {
      e.preventDefault()
      props.handleRegister(formData)
    }}>
      <label>
        Email
        <br/>
      <input type='text' name='email' value={formData.email} onChange={handleChange}/>
        </label>
        <br/>
      <label>
        Username
        <br/>
      <input type='text' name='username' value={formData.username} onChange={handleChange}/>
      </label>
      <br/>
      <label>
        Password
        <br/>
      <input type='password' name='password' value={formData.password} onChange={handleChange}/>
        </label>
        <br/>
      <button>Register</button>
    </form>
    </div>
  )
}