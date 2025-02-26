import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import StudentsView from '../student/StudentsView'
import AddStudent from '../student/AddStudent'
import ViewStudent from '../student/ViewStudent'
import EditStudent from '../student/EditStudent'

const StudentRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view-students" element={<StudentsView />} />
      <Route path="/add-students" element={<AddStudent />} />
      <Route path="/edit-student/:id" element={<EditStudent />} />
      <Route path="/student-profile/:id" element={<ViewStudent />} />
    </Routes>
  )
}

export default StudentRoute
