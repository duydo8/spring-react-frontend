import './App.css';
import StudentsView from './components/student/StudentsView';
import AddStudent from './components/student/AddStudent.js';
import Home from './components/Home.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from './components/common/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditStudent from './components/student/EditStudent.js';
import ViewStudent from './components/student/ViewStudent.js';

function App() {
  return (
    <main className='container mt-5'>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view-students" element={<StudentsView />} />
            <Route path="/add-students" element={<AddStudent />} />
            <Route path="/edit-student/:id" element={<EditStudent />} />
            <Route path="/student-profile/:id" element={<ViewStudent />} />
            
          </Routes>

      </BrowserRouter>
      </main>
  );
}

export default App;
