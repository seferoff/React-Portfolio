
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from "./pages/HomePage/Home.js"
import About from "./pages/AboutPage/About.js"
import Experience from "./pages/ExperiencePage/Experience.js"
import Contact from "./pages/ContactPage/Contact.js"
import NotFound from "./pages/NotFoundPage/NotFound.js"

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <main>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/experience" element={<Experience/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/*" element={<NotFound/>}></Route>
     </Routes>
   </main>
    </div>
  );
}

export default App;
