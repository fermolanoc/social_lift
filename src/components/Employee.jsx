import SingleEmployee from "./SingleEmployee";
import employees from "../employees";
import "../css/Employee.css";

function singleEmployee(employee) {
  if (employee.id === "4") {
    return (
      <SingleEmployee
        key={employee.id}
        image={employee.profile_image}
        name={employee.employee_name}
        age={employee.employee_age}
        position={employee.employee_position}
        company={employee.employee_company}
        salary={employee.employee_salary}
        rating={employee.rating}
      />
    );
  }
}

function Employee() {
  return (
    <div className="container">
      <div className="employee--detail">
        {employees.data.map(singleEmployee)}
      </div>
      <div className="container--rating">
        <h2>Rate employee on the following aspects between 0 and 10</h2>
        <label htmlFor="points">Productivity</label>
        <input type="range" id="points" name="points" min="0" max="10"/>
        <label htmlFor="points">Quality of Work</label>
        <input type="range" id="points" name="points" min="0" max="10" value="8"/>
        <label htmlFor="points">Level of Creativity</label>
        <input type="range" id="points" name="points" min="0" max="10" value="6"/>
        <label htmlFor="points">Peer Feedback</label>
        <input type="range" id="points" name="points" min="0" max="10" value="9"/>
        <label htmlFor="points">Teamwork and Leadership</label>
        <input type="range" id="points" name="points" min="0" max="10" value="4"/>
        <label htmlFor="points">Goals and Target Achievement</label>
        <input type="range" id="points" name="points" min="0" max="10"/>
        <button type="submit">Submit Rating</button>
      </div>
    </div>
  );
}

export default Employee;
