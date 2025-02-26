import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import StudentsView from '../student/StudentsView'
import AddStudent from '../student/addStudent'

const StudentRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view-students" element={<StudentsView />} />
      <Route path="/add-students" element={<AddStudent />} />
    </Routes>
  )
}

export default StudentRoute
