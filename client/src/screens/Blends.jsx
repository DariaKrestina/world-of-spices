import React from 'react'
import { Link } from "react-router-dom"

export default function Blends(props) {
  return (
    <div>
      <h1>Your spice blend collection</h1>
      {props.blends.map(blend => (
        <div key={`blend${blend.id}`}>
          <p>{blend.name}</p>
          <Link to={`/blends/${blend.id}/edit`}><button>Update</button></Link>
          <button onClick={()=>props.handleBlendDelete(blend.id)}>Delete</button>
        </div>
      ))}
      <Link to='/blends/new'><button>Add new blend</button></Link>
    </div>
  )
}
