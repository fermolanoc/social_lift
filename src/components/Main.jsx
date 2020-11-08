import React from "react";

function Main() {
  return (
    <main>
      <div className="about-us">
        <div className="about-us__container">
          <div className="about-us__img">
            <picture>
              <img src="https://source.unsplash.com/random?workteam" alt=""/>
            </picture>
          </div>
          <div className="about-us__content">
            <div className="about-us__content--title">What we do...</div>
            <div className="about-us__content--description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              unde tempora ad. Voluptas numquam veniam eius ducimus repellendus
              earum distinctio, sit consequatur nostrum laboriosam soluta!
              Similique itaque accusamus ut molestias.<br></br> Facere repellat quia
              aliquam quisquam distinctio reprehenderit quae mollitia ab id
              ullam magni fuga voluptatem tenetur tempore, amet suscipit odio?
              Reprehenderit dolor tempore distinctio corporis deleniti magnam
              suscipit ipsum quibusdam! Neque suscipit laborum rerum, nemo
              adipisci dolore magni. Nostrum porro quibusdam debitis expedita
              odio deleniti fugiat atque nihil sed nisi facilis veritatis fuga
              incidunt aspernatur cumque sunt laboriosam, culpa illo! Odit
              cumque aperiam, quis autem facere iusto eveniet voluptates
              repellendus ad, inventore reprehenderit laboriosam optio, aliquam
              similique eos aspernatur a id minima beatae quos. <br></br>Nostrum, nobis?
              Enim numquam nisi cupiditate! Consectetur quisquam maiores
              doloremque illum error deleniti reiciendis! Earum optio, amet sit
              itaque velit ipsa laborum esse voluptatum culpa vero deserunt
              accusamus illum non. Eos, consequatur consequuntur! Doloremque,
              similique omnis.
            </div>
            <div><button className="about-us__content--button button">Read more...</button></div>
          </div>
        </div>
      </div>
      <hr></hr>
      <section className="carousel__new">
        <div className="category__header">
          <h2 className="category__header--title">Best Rated Employees</h2>
          <button className="category__header--button button">Rate an employee</button>
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
