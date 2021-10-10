import { Link } from "react-router-dom"
import './Spices.css'


export default function Spices(props) {
  return (
    <main>
      {props.spices.map(spice => (
        <div className="spices-single-spice" key={`spice${spice.id}`}>
          <Link className="spices-description-link" to={`/spices/${spice.id}`}>
            <div>
            <img className="spices-img" alt="spice" src={spice.img_URL} width="100%"/>
            <p>{spice.name}</p>
            </div>
          </Link>
        </div>
      ))}
      <button className="spices-button"><Link to='/blends/new'>Create new blend</Link></button>
    </main>
  )
}
