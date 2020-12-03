import React from "react";

function EmployeeList(props) {
  return (
    <div className="list__container">
            <img
              className="item__img"
              src={props.image}
              alt=""
            />
            <div className="item__details">
              <p className="--item__details--name">
                {props.name}
              </p>
              <p className="item__details--subtitle">
                {props.position}
              </p>
              <p className="item__details--company">
                {props.company}
              </p>
              <p className="item__details--rating">
                {props.rating}
              </p>
            </div>
          </div>
  );
}

export default EmployeeList;