import React from 'react'
import { Link } from "react-router-dom"

export default function Blends(props) {
  return (
    <div>
      {props.blends.map(blend => (
        <>
            <p key={`blend${blend.id}`}>{blend.name}</p>
        </>
      ))}
      {/* <button><Link to='/create'>Create New Blend</Link></button> */}
    </div>
  )
}
