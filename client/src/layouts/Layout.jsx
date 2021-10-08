import React from "react";
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        {
          props.currentUser ? (
            <div>
              <p>Hello, {props.currentUser.username}</p>
              <Link to='/blends'>My blends</Link>
              <Link to='/spices'>All spices</Link>
              <button onClink={props.handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
            </div>
          )
        }
        <h1>WS</h1>
        <hr/>
      </header>
      {props.children}
      <footer>
        <p>&copy; {new Date().getFullYear()} by Daria Krestina</p>
        <div className="footer-images">
          <a href="mailto:dykrestina@gmail.com">
              <img src="https://i.imgur.com/dku2zgp.png" alt="email icon" width="48px"/>
          </a>
          <a href="https://www.linkedin.com/in/daria-krestina/" target="_blank" rel="noreferrer">
              <img className="linkedin-image" src="https://i.imgur.com/Z7y5ob9.png" alt="Linkein logo" width="48px"/>
          </a>
          <a href="https://github.com/DariaKrestina" target="_blank" rel="noreferrer">
              <img src="https://i.imgur.com/iavAlwB.png" alt="Github logo" width="48px"/>
          </a>
        </div>
      </footer>
    </div>
  )
}