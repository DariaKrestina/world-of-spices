import React from "react";
import { Link } from 'react-router-dom'
import './Layout.css'

export default function Layout(props) {
  return (
    <div>
      <header>
        <div className='logo-and-text'>
        {
          props.currentUser ? (
            <div className='header-text authorized'>
              <p className='welcome-message'>Hello, {props.currentUser.username}</p>
              <Link className='header-link' to='/blends'>My blends</Link>
              <Link className='header-link' to='/spices'>All spices</Link>
              <button className='header-button' onClick={props.handleLogout}>Logout</button>
            </div>
          ) : (
            <div className='header-text'>
              <Link className='header-link' to='/register'>Register</Link>
              <Link className='header-link' to='/login'>Login</Link>
            </div>
          )
        }
        <Link to='/'><img className='logo' alt='logo' src='https://i.imgur.com/8kvQHQJ.png' width="100px"/></Link>
        </div>
      </header>
      {props.children}
      <footer>
        <p>&copy; {new Date().getFullYear()} by Daria Krestina</p>
        <div className="footer-images">
          <a href="mailto:dykrestina@gmail.com">
              <img src="https://i.imgur.com/dku2zgp.png" alt="email icon" width="45px"/>
          </a>
          <a href="https://www.linkedin.com/in/daria-krestina/" target="_blank" rel="noreferrer">
              <img className="linkedin-image" src="https://i.imgur.com/Z7y5ob9.png" alt="Linkein logo" width="45px"/>
          </a>
          <a href="https://github.com/DariaKrestina" target="_blank" rel="noreferrer">
              <img src="https://i.imgur.com/iavAlwB.png" alt="Github logo" width="45px"/>
          </a>
        </div>
      </footer>
    </div>
  )
}