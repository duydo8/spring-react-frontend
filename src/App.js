import './App.css';
import StudentsView from './components/student/StudentsView';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from './components/common/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <StudentsView />
      </div>
    </BrowserRouter>
  );
}

export default App;
