import React,{useState} from 'react'
import {
  FaTachometerAlt,
  FaBook,
  FaClipboard,
  FaCalendar,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaSun,
  FaMoon,
  
} from 'react-icons/fa';
const SidebarList = ({isDarkMode,toggleTheme}) => {
  return (
   <>
   <div className="sidebar">
        <h2>Xander Academy</h2>
        <ul>
         
          <li className="active" id='dashboard' 
          onClick={()=>{
                      document.getElementById("dashboard").classList.add("active")
                      document.getElementById("courses").classList.remove("active")
                      document.getElementById("assignment").classList.remove("active")
                      document.getElementById("messages").classList.remove("active")
                      document.getElementById("calendar").classList.remove("active")
                      document.getElementById("settings").classList.remove("active")
                      document.getElementById("toggle").classList.remove("active")
                   }}>
            <FaTachometerAlt /> Dashboard
          </li>
          <li onClick={()=>{
                      document.getElementById("dashboard").classList.remove("active")
                      document.getElementById("courses").classList.add("active")
                      document.getElementById("assignment").classList.remove("active")
                      document.getElementById("messages").classList.remove("active")
                      document.getElementById("calendar").classList.remove("active")
                      document.getElementById("settings").classList.remove("active")
                      document.getElementById("toggle").classList.remove("active")
          }} id='courses'>
            <FaBook /> Courses
          </li>

          <li id='assignment' 
          onClick={()=>{
                      document.getElementById("dashboard").classList.remove("active")
                      document.getElementById("courses").classList.remove("active")
                      document.getElementById("assignment").classList.add("active")
                      document.getElementById("messages").classList.remove("active")
                      document.getElementById("calendar").classList.remove("active")
                      document.getElementById("settings").classList.remove("active")
                      document.getElementById("toggle").classList.remove("active")
                   }}>
            <FaClipboard /> Assignment
          </li>
          <li id='messages' 
          onClick={()=>{
                      document.getElementById("dashboard").classList.remove("active")
                      document.getElementById("courses").classList.remove("active")
                      document.getElementById("assignment").classList.remove("active")
                      document.getElementById("messages").classList.add("active")
                      document.getElementById("calendar").classList.remove("active")
                      document.getElementById("settings").classList.remove("active")
                      document.getElementById("toggle").classList.remove("active")
                   }}>
            <FaEnvelope /> Messages
          </li>
          <li id='calendar'
          onClick={()=>{
                    document.getElementById("dashboard").classList.remove("active")
                    document.getElementById("courses").classList.remove("active")
                    document.getElementById("assignment").classList.remove("active")
                    document.getElementById("messages").classList.remove("active")
                    document.getElementById("calendar").classList.add("active")
                    document.getElementById("settings").classList.remove("active")
                    document.getElementById("toggle").classList.remove("active")
                   }}>
            <FaCalendar /> Calendar
          </li>
          <li id='settings'
          onClick={()=>{
                    document.getElementById("dashboard").classList.remove("active")
                    document.getElementById("courses").classList.remove("active")
                    document.getElementById("assignment").classList.remove("active")
                    document.getElementById("messages").classList.remove("active")
                    document.getElementById("calendar").classList.remove("active")
                    document.getElementById("settings").classList.add("active")
                    document.getElementById("toggle").classList.remove("active")
                   }}>
            <FaCog /> Settings
          </li>
          <li onClick={toggleTheme} id='toggle'>
            {isDarkMode ? <FaSun /> : <FaMoon />} {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </li>
          <li>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>
   </>
  )
}

export default SidebarList