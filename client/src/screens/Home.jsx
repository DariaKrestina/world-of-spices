import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home(props) {
  return (
    <div className="home">
      <img
        className="home-img"
        alt="black background with spoons"
        src="https://i.imgur.com/CUE9WyT.jpg"
        width="100%"
      />
      <div className="home-join-now">
      <p>Create your own unique spice blend today</p>
      <Link to="/register">
        <button className="home-button">Join now</button>
      </Link>
      </div>
      <h2 className="home-h2">Open your World of Spices </h2>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/QGUPqMI.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/FpnSCBF.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/RvMlS61.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
