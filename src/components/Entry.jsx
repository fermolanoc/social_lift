import React from "react";

function Card(props) {
  return (
    <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src={props.image}
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                {props.name}
              </p>
              <p className="carousel__new--item__details--subtitle">
                {props.position}
              </p>
              <p className="carousel__new--item__details--company">
                {props.company}
              </p>
              <p className="carousel__new--item__details--rating">
                {props.rating}
              </p>
            </div>
          </div>
  );
}

export default Card;