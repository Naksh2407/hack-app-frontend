import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect, useState } from "react";
import { fetchCourses } from "./api";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(data => setCourses(data));
  }, []);
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.length > 0 ? courses.map(course => (
          <li key={course.id}>{course.name}</li>
        )) : <li>No courses available.</li>}
      </ul>
    

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
