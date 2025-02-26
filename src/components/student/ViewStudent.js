import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ViewStudent = () => {
    let navigate = useNavigate()
    const [student, setStudents] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })
    const id = useParams().id;
    const { firstName, lastName, email, department } = student

    useEffect(() => {
        loadStudent();
      }, []);

    const loadStudent = async () => {
        try {
            console.log("ID:", id);
            const result = await axios.get(`/api/student/findById`, {
                params: { id }
            });
            setStudents(result.data);
        } catch (error) {
            console.error("Error loading students:", error);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await axios.put('/api/student/update', student)
    //     navigate('/view-students')
    // }
    return (
        <div className='col-sm-8 py-2 px-5'>
            <h1>Edit Student</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' className='form-control' id='firstName' name="firstName" value={firstName} required/>
                </div><br />
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' className='form-control' id='lastName' name="lastName" value={lastName}/><br />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' name="email" value={email}/><br />
                </div>
                <div className='form-group'>
                    <label htmlFor='department'>Department</label>
                    <input type='text' className='form-control' id='department' name="department" value={department} /><br />
                </div>
                <div className='form-group'>
                    <br />
                    {/* <button type='submit' className='btn btn-outline-success btn-lg'>Update Student</button> */}
                    <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-lg' style={{ marginLeft: '5px' }}>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default ViewStudent
