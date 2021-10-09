import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function SpiceDetail(props) {
  const { id } = useParams()

  const spice = props.spices.find(spice => spice.id === Number(id))
  return !spice ? (<h1>Loading...</h1>) : (
    <article>
      <h1>{spice.name}</h1>
      <img alt="spice" src={spice.img_URL} width="50%" />
      <p>{spice.description}</p>
      <p>Flavor</p>
      <p>{spice.flavor}</p>
      <h4>Do you want to make a special mix of spices?</h4>
      <Link to='/blends/new'><button>Create new blend</button></Link>
    </article>
  )
}
