import './App.css';
import StudentsView from './components/student/StudentsView';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <h2>Welcome to our website</h2>
      <StudentsView />
    </div>
  );
}

export default App;
