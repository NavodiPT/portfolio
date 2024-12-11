import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project';


function App() {
  return (
    <Router>
      <div>
        <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/project" element={<Project/>}></Route>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
