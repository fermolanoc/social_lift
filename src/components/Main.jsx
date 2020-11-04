import React from "react";

function Main() {
  return (
    <main>
      <section className="carousel__new">
      <h2 className="category__title">Best Rated Employees</h2>
          <div className="carousel__new__container">
              <div className="carousel__new--item">
                <img
                class="carousel-item__img"
                src="https://source.unsplash.com/random?woman"
                alt=""
                />
                <div class="carousel__new--item__details">
                <p class="carousel__new--item__details--title">Employee Name</p>
                <p class="carousel__new--item__details--subtitle">Frontend Developer</p>
                </div>
              </div>
              <div className="carousel__new--item">
                <img
                class="carousel-item__img"
                src="https://source.unsplash.com/random?man"
                alt=""
                />
                <div class="carousel__new--item__details">
                <p class="carousel__new--item__details--title">Employee Name</p>
                <p class="carousel__new--item__details--subtitle">Frontend Developer</p>
                </div>
              </div>
          </div>
      </section>
    </main>
  );
}

export default Main;
