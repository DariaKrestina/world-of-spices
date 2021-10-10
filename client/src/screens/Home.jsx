import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <img alt="black background with spoons" src="https://i.imgur.com/CUE9WyT.jpg" width="100%" />
      <p>Create your own unique spice blend</p>
      <Link to='/register'><button>Join now</button></Link>
      <h2>Open your World of Spices </h2>
      <p>Here goes carousel of spice images</p>
      {/* {props.spices.map(spice => (
        <img alt="spice" src={spice.img_URL} width="50%" /> */}
      {/* ))} */}
    </div>
  )
}
