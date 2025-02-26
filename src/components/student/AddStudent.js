import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddStudent = () => {
  let navigate = useNavigate()
  const [student, setStudents] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  })

  const { firstName, lastName, email, department } = student
  const handleInputChange = (e) => {
    setStudents({ ...student, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/api/student/save', student)
    navigate('/view-students')
  }
  return (
    <div className='col-sm-8 py-2 px-5'>
      <h1>Create Student</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' className='form-control' id='firstName' name="firstName" value={firstName} required 
          onChange={(e) =>handleInputChange(e)}
          />
        </div><br/>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' className='form-control' id='lastName' name="lastName" value={lastName} onChange={(e) =>handleInputChange(e)} /><br/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' name="email" value={email} onChange={(e) =>handleInputChange(e)} /><br/>
        </div>
        <div className='form-group'>
          <label htmlFor='department'>Department</label>
          <input type='text' className='form-control' id='department' name="department" value={department} onChange={(e) =>handleInputChange(e)} /><br/>
        </div>
        <div className='form-group'>
          <br/>
          <button type='submit' className='btn btn-outline-success btn-lg'>Add Student</button>
          <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-lg' style={{ marginLeft: '5px' }}>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default AddStudent
