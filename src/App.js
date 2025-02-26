import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import StudentRoute from './components/route/StudentRoute.js';

function App() {
  return (
    <main className='container mt-5'>
      <BrowserRouter>
          <NavBar />
          <StudentRoute />

      </BrowserRouter>
      </main>
  );
}

export default App;
