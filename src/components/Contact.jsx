import React from 'react';

function Contact() {
  const handleEmailClick = () => {
    const emailSubject = 'Inquiry from LS Escola de Idiomas';
    const emailBody = 'Hello,\n\nI have a question regarding LS Escola de Idiomas. Could you please provide more information?\n\nThank you.\n\nBest regards,';
    const mailtoLink = `mailto:ls.escola.de.idiomas@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_self');
  };

  return (
    <div>
      <a href="#" onClick={handleEmailClick}>
        Email LS Escola de Idiomas
      </a>
    </div>
  );
}

export default Contact;
