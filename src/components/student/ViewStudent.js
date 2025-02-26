import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewStudent = () => {
    // let navigate = useNavigate()
    const [student, setStudents] = useState({
        avatarUrl: '',
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })
    const id = useParams().id;
    const { avatarUrl, firstName, lastName, email, department } = student

    const loadStudent = useCallback(async () => {
        try {
            console.log("ID:", id);
            const result = await axios.get(`/api/student/findById`, {
                params: { id }
            });
            setStudents(result.data);
        } catch (error) {
            console.error("Error loading students:", error);
        }
    }, [id]);

    useEffect(() => {
        loadStudent();
    }, [loadStudent])

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await axios.put('/api/student/update', student)
    //     navigate('/view-students')
    // }
    return (
        <div className="container mt-4">
            <div className="row">
                {/* Cột bên trái - Thông tin hình ảnh và nút */}
                <div className="col-md-3 mb-3">
                    <div className="card p-3 text-center shadow-sm">
                        {/* Ảnh đại diện */}
                        <img
                            src={avatarUrl ? avatarUrl : 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/333802564/original/b1bc4675aed76b6f139d5f1f4549d8154108413a/make-a-talkling-ai-avatar.jpg'}
                            alt="User avatar"
                            className="rounded-circle mx-auto"
                            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                        />
                        {/* Tên */}
                        <h5 className="mt-3">
                            {firstName} {lastName}
                        </h5>
                        {/* Các nút */}
                        <div className="d-flex justify-content-center mt-3 gap-2">
                            <button className="btn btn-primary">Call</button>
                            <button className="btn btn-secondary">Message</button>
                        </div>
                    </div>
                </div>

                {/* Cột bên phải - Thông tin chi tiết */}
                <div className="col-md-9">
                    <div className="card p-3 shadow-sm">
                        <table className="table table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <th>First Name</th>
                                    <td>{firstName}</td>
                                </tr>
                                <tr>
                                    <th>Last Name</th>
                                    <td>{lastName}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{department}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ViewStudent
