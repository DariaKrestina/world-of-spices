import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SpiceDetail.css";

export default function SpiceDetail(props) {
  const { id } = useParams();

  const spice = props.spices.find((spice) => spice.id === Number(id));
  return !spice ? (
    <h1>Loading...</h1>
  ) : (
    <article>
      <h1>{spice.name}</h1>
      <div className="detail-img-and-description">
          <img alt="spice" src={spice.img_URL} width="50%" />
          <div className="detail-description-only">
            <p>{spice.description}</p>
            <div className="detail-flavor">
              <span>Flavor</span>
              <p>{spice.flavor}</p>
            </div>
          </div>
      </div>
      <div className="detail-button-and-description">
        <h4>Do you want to make a special mix of spices?</h4>
        <Link to="/blends/new">
          <button>Create new blend</button>
        </Link>
      </div>
    </article>
  );
}
