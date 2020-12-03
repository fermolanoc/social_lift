import { Link } from "react-router-dom";
import "../css/RateEmployee.css";
import employees from "../employees";
import EmployeeList from "./EmployeeList";

function findEmployee(employee) {
  return (
    <EmployeeList
      key={employee.id}
      image={employee.profile_image}
      name={employee.employee_name}
      position={employee.employee_position}
      age={employee.employee_age}
      company={employee.employee_company}
      rating={employee.rating}
    />
  );
}

function RateEmployee() {
  return (
    <div className="employees__list__container">
      <div className="filter">
        <div className="filter__option">
        <label htmlFor="points">Rating (between 0 and 5):</label>
        <input type="range" id="points" name="points" min="0" max="5" /></div>

        <div className="filter__option">
        <label for="cars">Salary:</label>
            <select name="position" id="position">
                <option value="none">Choose one</option>
                <option value="supervisor">$0 - $3999</option>
                <option value="Frontend Developer">$4000 - $7999</option>
                <option value="React Developer">+ $8000</option>
            </select></div>

<div className="filter__option">
        <label for="cars">Job Position:</label>
            <select name="position" id="position">
                <option value="none">Choose one</option>
                <option value="supervisor">Supervisor</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="React Developer">React Developer</option>
                <option value="Teller">Teller</option>
                <option value="Driver">Driver</option>
            </select></div>
      </div>
      <div className="container--list"><Link to="/Employee" className="text-link">
        {employees.data.map(findEmployee)}</Link>
      </div>
    </div>
  );
}

export default RateEmployee;
