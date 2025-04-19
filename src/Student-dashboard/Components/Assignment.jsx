import React from 'react'
let Assignment = ()=>{
  return(
    <>
<div className="section">
  <h3>Upcoming Assignment</h3>
  <ul>
    <li>Biology Report - Due {new Date().getFullYear() }</li>
    <li>Math Quiz - Due {new Date().getFullYear() }</li>
    <li>Essay on Shakespeare - Due {new Date().getFullYear() }</li>
  </ul>
</div>
    </>
  )
}
export default Assignment
// This component is responsible for rendering the list of upcoming assignments for the student. It includes a list of assignments with their titles and due dates.
// The assignments data is hardcoded for demonstration purposes, but in a real application, it would likely be fetched from an API or database.