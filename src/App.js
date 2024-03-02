import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/contact" element={<Contact/>} />
       
  
     </Routes>

    </div>
  );
}

export default App;
