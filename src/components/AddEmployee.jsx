import employees from "../employees";
import '../css/AddEmployee.css'



function AddEmployee() {
    return (
        <div className="create__employee">
            <h2 className="create__employee__title">Add a new employee</h2>
          <form action="">
              <label htmlFor="name">Employee name (Required)</label>
              <input type="text" name="name" id="name" required/>
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company"/>
              <label htmlFor="position">Job Position</label>
              <input type="text" name="position" id="position" placeholder="Looking for a job..."/>
              <label htmlFor="salary">Salary</label>
              <input type="decimal" inputMode="decimal" name="salary" id="salary" placeholder="Salary in USD"/>
              <label htmlFor="age">Age (Required)</label>
              <input type="number" inputMode="numeric" name="age" id="age" required/>
              <label htmlFor="image">Upload Image (Required)</label>
              <input type="file" name="image" id="image" required/>
              <button type="submit">Save employee</button>
          </form>
        </div>
    )
    }

export default AddEmployee;