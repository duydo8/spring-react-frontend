import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const result = await axios.get('/api/student/findAll');
      console.log("Result:", result.data);
      setStudents(result.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  const handleDelete = async (id) => {
    if (isDeleting) return; // Ngăn gọi nhiều lần nếu đang xoá
    setIsDeleting(true);
    try {
      await axios.delete('http://localhost:9095/api/student/deleteById/', {
        params: { id }
      });
      // Cập nhật state cục bộ bằng cách loại bỏ student có id vừa xoá
      setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <table className='table table-bordered table-hover shadow'>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="4">Actions</th>
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
              <td className='mx-2'>
                <Link to={`/student-profile/${student.id}`} className='btn btn-info'><FaEye /></Link>
              </td>
              <td className='mx-2'>
                <Link to={`/edit-student/${student.id}`} className='btn btn-warning'><FaEdit /></Link>
              </td>
              <td className='mx-2'>
                <button onClick={() => handleDelete(student.id)} className='btn btn-danger'>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsView;
