import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployee();
    }, [])

    const getAllEmployee= () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

  return (

    <div className='container'>
      <h2 className='text-center'>List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">Add employee</Link>
      <table className='table table-bordered table-stripped'>
        <thead>
            <tr>
            <th> Employee Id</th>
            <th> Employee first Name</th>
            <th> Employee last Name</th>
            <th> Employee Email Id</th>
            <th> Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(
                    employee =>
                    <tr key={employee.id}>
                        <td>{employee.id} </td>
                        <td>{employee.firstName} </td>
                        <td>{employee.lastName} </td>
                        <td>{employee.emailId} </td>
                        <td>
                            <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
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
