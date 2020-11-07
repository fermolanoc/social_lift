import React from "react";

function Main() {
  return (
    <main>
      <section className="carousel__new">
        <div className="category__header">
          <h2 className="category__header--title">Best Rated Employees</h2>
          <button className="category__header--button">Rate an employee</button>
        </div>
        <div className="carousel__new__container">
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?profile-photo"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">
                Minneapolis College
              </p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?man"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">Tesla</p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?woman"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">
                Delaware North
              </p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?person"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">Platzi</p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?human"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">LinkedIn</p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?professional"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--position">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">US Bank</p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?girl"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">USCIS</p>
            </div>
          </div>
          <div className="carousel__new--item">
            <img
              className="carousel-item__img"
              src="https://source.unsplash.com/random?guy"
              alt=""
            />
            <div className="carousel__new--item__details">
              <p className="carousel__new--item__details--name">
                Employee Name
              </p>
              <p className="carousel__new--item__details--subtitle">
                Frontend Developer
              </p>
              <p className="carousel__new--item__details--company">
                Dinky Studio
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
