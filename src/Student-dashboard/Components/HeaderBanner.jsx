import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
let HeaderBanner = ({ userData,showHideSideBar,showSideBar }) => {
  console.log(showSideBar)
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    const generateId = () => Math.floor(1000000 + Math.random() * 9000000);
    setStudentId(generateId());
  }, []);

  return (
    <>
      <div className="header-banner">
      <h4 className='menuBar' onClick={showHideSideBar}><FaBars/> Menu</h4>
        <h2>Welcome back, {userData.name}</h2>
        <p>Your student ID is E{studentId}</p>
      </div>
    </>
  );
};

export default HeaderBanner;