import React from 'react'
import { Link } from "react-router-dom"
import './Blends.css'

export default function Blends(props) {
  return (
    <div className="blends">
      <h1>Your spice blend collection</h1>
      {props.blends.map(blend => (
        <div className="blends-single-blend" key={`blend${blend.id}`}>
          <div>
            <h2>{blend.name}</h2>
            <p>{blend.spices.map(spice => <span>{spice.name} </span>)}</p>
          </div>
          <div className="blends-icons">
            <Link to={`/blends/${blend.id}/edit`}><button><img src="https://i.imgur.com/DOqmnqd.png" alt="edit" width="40px"/></button></Link>
            <button onClick={() => props.handleBlendDelete(blend.id)}><img src="https://i.imgur.com/lFrq8MB.png" alt="delete" width="40px" /></button>
          </div>
        </div>
      ))}
      <Link to='/blends/new'><button className="blends-add-button">Add new blend</button></Link>
    </div>
  )
}
