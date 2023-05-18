import React from 'react';
import '../styles/Calendar.css';

function Calendar() {
  
  return (
    <div
      className="iframe-calendar"
    >
      <img src={require("../images/calendar.png")}
      alt='calendar'/>
      
    </div>
  );
}

export default Calendar;
