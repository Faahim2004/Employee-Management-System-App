import React , {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const navigator = useNavigate();

    const [employees, setEmployees] = useState([]) 
    //setEmployees will have the response from the web  
    //we should call the employees in table data
    
    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
    })
    }

    //function to add an employee and navigates to addemployee route in app.jsx
    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>

                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
  {
    employees.map(employee => 
      <tr key={employee.id}>
        <td data-label="Employee Id">{employee.id}</td>
        <td data-label="First Name">{employee.firstName}</td>
        <td data-label="Last Name">{employee.lastName}</td>
        <td data-label="Email">{employee.email}</td>
        <td>
          <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
          <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
        </td>
      </tr>
    )
  }
</tbody>


        </table>
    </div>
  )
}

export default ListEmployeeComponent