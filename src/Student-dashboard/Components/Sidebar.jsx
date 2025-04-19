import React, { useState } from 'react';
import SidebarList from './SidebarList'


let Sidebar = ({showSideBar,isDarkMode,toggleTheme}) => {
  console.log(showSideBar, "sidebar")
 

  return (
    <>
    
      {showSideBar && <SidebarList isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>}
    </>
  );
};

export default Sidebar;