import { Link } from "react-router-dom"


export default function Spices(props) {
  return (
    <div>
      {props.spices.map(spice => (
        <div key={`spice${spice.id}`}>
          <Link to={`/spices/${spice.id}`}>
            <div>
            <img alt="spice" src={spice.img_URL} width="100%"/>
            <p>{spice.name}</p>
            </div>
          </Link>
        </div>
      ))}
      <button><Link to='/blends/new'>Create new blend</Link></button>
    </div>
  )
}
