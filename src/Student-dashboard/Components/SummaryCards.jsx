import React, { useState, useEffect } from 'react';

let SummaryCards = () => {
  const [gpa, setGpa] = useState(0);

  useEffect(() => {
    const randNumber = (Math.random() * 5).toFixed(2);
    setGpa(randNumber);
  }, []);

  return (
    <>
      <div className="summary-cards">
        <div className="card">
          <h4>Active Courses</h4>
          <p>5</p>
        </div>

        <div className="card">
          <h4>Current GPA</h4>
          <p>{gpa}</p>
        </div>

        <div
          className="card"
          style={{ backgroundColor: 'rgb(244, 146, 146)', color: 'white', padding: '10px' }}
        >
          <h4>Notification</h4>
          <p className="banner-advert">
            Alert: All students who reside in the hostel should go home!
          </p>
        </div>
      </div>
    </>
  );
};

export default SummaryCards