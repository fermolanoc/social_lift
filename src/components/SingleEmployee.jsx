import React from "react";

function SingleEmployee(props) {
  return (
    <div className="list__container">
            <img
              className="item__img"
              src={props.image}
              alt=""
            />
            <div className="item__details">
              <p className="item__details--name">
                {props.name}
              </p>
              <p className="item__details--age">
                <strong>Age:</strong> {props.age}
              </p>
              <p className="item__details--company">
                <strong>Company:</strong> {props.company}
              </p>
              <p className="item__details--subtitle">
                <strong>Position:</strong> {props.position}
              </p>
              <p className="item__details--salary">
                <strong>Salary:</strong> ${props.salary} (last reported)
              </p>
              <p className="item__details--rating">
                <strong>Rating:</strong> {props.rating}
              </p>
            </div>
          </div>
  );
}

export default SingleEmployee;