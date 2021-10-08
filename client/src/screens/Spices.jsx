import React from 'react'
import { Link } from "react-router-dom"

export default function Spices(props) {
  return (
    <div>
      {props.spices.map(spice => (
        <>
          <Link to={`/spices/${spice.id}`}>
            <img key={`spice${spice.id}`} alt="tourist attraction pic" src={spice.img_URL} width="100%"/>
            <p key={`spice${spice.id}`}>{spice.name}</p>
          </Link>
        </>
      ))}
      <button><Link to='/create'>Create New Blend</Link></button>
    </div>
  )
}
