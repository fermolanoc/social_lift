import React from "react";
import employees from "../employees";
import { Link } from "react-router-dom";

import Hero from './Hero';
import About from './About';
import Entry from "./Entry";
import Clients from './Clients';

function createEmployee(employee) {
  if (employee.rating === "★★★★" || employee.rating === "★★★★★") {
  
  return (
    <Entry
      key={employee.id}
      image={employee.profile_image}
      name={employee.employee_name}
      position={employee.employee_position}
      age={employee.employee_age}
      company={employee.employee_company}
      rating={employee.rating}
    />
  );}
}

function Main() {
  return (
    <main>
      <Hero />,
      <About />
      <hr></hr>
      <section className="carousel__new">
        <div className="category__header">
          <h2 className="category__header--title">Best Rated Employees</h2>
          <button className="category__header--button button">
          <Link to="/AddEmployee" className="text-link">+ Add Employee</Link>
          </button>
          <button className="category__header--button button">
          <Link to="/RateEmployee" className="text-link">% Rate Employee</Link>
          </button>
        </div>
        <div className="carousel__new__container">
          {employees.data.map(createEmployee)}
        </div>
      </section>
      <Clients />
    </main>
  );
}

export default Main;
