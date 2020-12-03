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
        <label htmlFor="points">Rating (between 0 and 5):</label>
        <input type="range" id="points" name="points" min="0" max="5" />

        <label htmlFor="low">$0 - $3999</label>
        <input type="checkbox" name="low" id="low"/>
        <label htmlFor="medium">$4000 - $7999</label>
        <input type="checkbox" name="medium" id="medium"/>
        <label htmlFor="high">+ $8000</label>
        <input type="checkbox" name="high" id="high"/>

        <label for="cars">Choose one:</label>
            <select name="position" id="position">
                <option value="none">Job Position</option>
                <option value="supervisor">Supervisor</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="React Developer">React Developer</option>
                <option value="Teller">Teller</option>
                <option value="Driver">Driver</option>
        </select>
      </div>
      <div className="container--list"><Link to="/Employee" className="text-link">
        {employees.data.map(findEmployee)}</Link>
      </div>
    </div>
  );
}

export default RateEmployee;
