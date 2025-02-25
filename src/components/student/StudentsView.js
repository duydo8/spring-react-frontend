import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentsView = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const result = await axios.get('http://localhost:9095/api/student/findAll');
            // Nếu cần, bạn có thể kiểm tra dữ liệu ở đây:
            const isValid = result.data.length > 0;
            if (isValid) {
                console.log("Result:", result.data);
                setStudents(result.data);
            }

        } catch (error) {
            console.error("Error loading students:", error);
        }
    };

    return (
        <div>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {students && students.map((student, index) => (
                        <tr key={student.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.department}</td>
                            <td>
                            <td className='mx-2'><button className='btn btn-secondary'>Create</button></td>
                            <td className='mx-2'><button className='btn btn-info'>View</button></td>
                            <td className='mx-2'><button className='btn btn-primary'>Edit</button></td>
                            <td className='mx-2'><button className='btn btn-danger'>Delete</button></td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsView;
