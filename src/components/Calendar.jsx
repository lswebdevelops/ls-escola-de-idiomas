import React from 'react';
import '../styles/Calendar.css';

function Calendar() {
  const calendarSrc = "https://calendar.google.com/calendar/embed?src=ls.escola.de.idiomas%40gmail.com&ctz=America%2FSao_Paulo&mode=WEEK&showTitle=0&showNav=0&showPrint=0&showCalendars=0&wkst=2&bgcolor=%23FFFFFF&ctz=America%2FSao_Paulo";

  return (
    <div
      className="iframe-calendar"
    >
      <iframe
        src={calendarSrc}
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        title="LS Escola de Idiomas Calendar"
      ></iframe>
    </div>
  );
}

export default Calendar;
