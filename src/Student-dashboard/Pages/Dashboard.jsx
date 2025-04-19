import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar.jsx'
import Assignment from '../Components/Assignment.jsx'
import CoursesList from '../Components/CoursesList.jsx'
import HeaderBanner from '../Components/HeaderBanner.jsx'
import Messages from '../Components/Messages.jsx'
import SummaryCards from '../Components/SummaryCards.jsx'
import { useLocation } from 'react-router-dom';
let Dashboard = ({isDarkMode,toggleTheme})=>{
  const location = useLocation();
  const userData = location.state;

  console.log(userData); // { name: 'John Doe', email: 'johndoe@example.com', password: '234567' }
const [showSideBar,setShowSideBar] = useState(false)
function showHideSideBar(e) {
  e.preventDefault()
  showSideBar===false?setShowSideBar(true):setShowSideBar(false)
}

  return(
    <>
    <div className="dashboard">
      <Sidebar showSideBar={showSideBar} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <main className="main-content">
        <HeaderBanner userData={userData} showHideSideBar={showHideSideBar} showSideBar={showSideBar}/>
        <SummaryCards/>
        <CoursesList/>
        <Assignment/>
        <Messages/>
      </main>
    </div>
    </>
  )
}
export default Dashboard
