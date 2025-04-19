import React from 'react'
let CoursesList = ()=>{
  return(
    <>
   <div className="section">
    <h3>Ongoing Course</h3>
    <ul>
      <li>Mathematics 101</li>
      <li>English 101</li>
      <li>Computer Science Basics</li>
      <li>Biology</li>
    </ul>
   </div>
    </>
  )
}
export default CoursesList
// This component is responsible for rendering the list of courses available to the student. It includes a list of courses with their names and teachers.
// The courses data is hardcoded for demonstration purposes, but in a real application, it would likely be fetched from an API or database.
