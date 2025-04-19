import React,{useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './Student-dashboard/Pages/SignUp.jsx'
import Dashboard from './Student-dashboard/Pages/Dashboard.jsx'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
   
   const toggleTheme = () => {setIsDarkMode((prev) => !prev)
    document.getElementById("dashboard").classList.remove("active")
                  document.getElementById("courses").classList.remove("active")
                  document.getElementById("assignment").classList.remove("active")
                  document.getElementById("messages").classList.remove("active")
                  document.getElementById("calendar").classList.remove("active")
                  document.getElementById("settings").classList.remove("active")
                  document.getElementById("toggle").classList.add("active")
                  if (isDarkMode) {
                    document.body.classList.add("darkmode")
                  } else{
                    document.body.classList.remove("darkmode")
                  }
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>} />
      </Routes>
    </Router>
  );
}

export default App