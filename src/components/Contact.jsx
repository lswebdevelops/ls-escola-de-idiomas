import React from 'react';

function Contact() {
  const handleEmailClick = () => {
    const emailSubject = 'Pengunta à LS Escola de Idiomas';
    const emailBody = 'Olá,\n\nTenho uma pergunta sobre a LS Escola de Idiomas. Você poderia fornecer mais informações, por favor?\n\nObrigado.\n\nCumprimentos,';
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
