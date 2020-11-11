import React from "react";
import employees from "../employees"
import Entry from './Entry';

function createEmployee(employee) {
  return (
    <Entry 
      key={employee.id}
      image={employee.profile_image}
      name={employee.employee_name}
      position={employee.employee_position}
      age={employee.employee_age}
      company={employee.employee_company}
    />
  );
}


function Main() {
  return (
    <main>
      <div className="about-us">
        <div className="about-us__container">
          <div className="about-us__img">
            <picture>
              <img src="https://source.unsplash.com/random?workteam" alt="" />
            </picture>
          </div>
          <div className="about-us__content">
            <div className="about-us__content--title">What we do...</div>
            <div className="about-us__content--description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              unde tempora ad. Voluptas numquam veniam eius ducimus repellendus
              earum distinctio, sit consequatur nostrum laboriosam soluta!
              Similique itaque accusamus ut molestias.<br></br> Facere repellat
              quia aliquam quisquam distinctio reprehenderit quae mollitia ab id
              ullam magni fuga voluptatem tenetur tempore, amet suscipit odio?
              Reprehenderit dolor tempore distinctio corporis deleniti magnam
              suscipit ipsum quibusdam! Neque suscipit laborum rerum, nemo
              adipisci dolore magni. Nostrum porro quibusdam debitis expedita
              odio deleniti fugiat atque nihil sed nisi facilis veritatis fuga
              incidunt aspernatur cumque sunt laboriosam, culpa illo! Odit
              cumque aperiam, quis autem facere iusto eveniet voluptates
              repellendus ad, inventore reprehenderit laboriosam optio, aliquam
              similique eos aspernatur a id minima beatae quos. <br></br>
              Nostrum, nobis? Enim numquam nisi cupiditate! Consectetur quisquam
              maiores doloremque illum error deleniti reiciendis! Earum optio,
              amet sit itaque velit ipsa laborum esse voluptatum culpa vero
              deserunt accusamus illum non. Eos, consequatur consequuntur!
              Doloremque, similique omnis.
            </div>
            <div>
              <button className="about-us__content--button button">
                Read more...
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <section className="carousel__new">
        <div className="category__header">
          <h2 className="category__header--title">Best Rated Employees</h2>
          <button className="category__header--button button">
            + Add Employee
          </button>
          <button className="category__header--button button">
            👍🏼 Rate Employee
          </button>
        </div>
        <div className="carousel__new__container">
          
          {employees.data.map(createEmployee)}
          
        </div>
      </section>
    </main>
  );
}

export default Main;
