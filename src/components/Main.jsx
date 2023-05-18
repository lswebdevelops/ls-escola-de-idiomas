
import React from 'react';
import Calendar from './Calendar';
import Contact from './Contact';
import '../styles/Components.css'

function Main() {
return (
<main>
<section id="about">
<h2>Sobre Nós</h2>
<p>A LS Escola de Idiomas é uma escola de inglês dedicada a fornecer educação em idiomas de qualidade para alunos de todas as idades. Oferecemos uma experiência de aprendizado dinâmica e imersiva que se concentra no desenvolvimento das habilidades de comunicação dos alunos.</p>
</section>
<section id="courses">
    <h2>Cursos</h2>
    <p>Oferecemos cursos de inglês para estudantes a partir de 14 anos. Nossos cursos são projetados para atender a diferentes níveis de proficiência, desde iniciantes até alunos avançados. Todo o material do curso é fornecido digitalmente pela escola.</p>
    
    <h3>Preços dos Cursos<strong>( ano 2023)</strong></h3>
    <table>
      <thead>
        <tr>
          <th>Horas por Semana</th>
          <th>Preço por Mês</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 hora</td>
          <td>R$260</td>
        </tr>
        <tr>
          <td>2 horas</td>
          <td>R$400</td>
        </tr>
        <tr>
          <td>3 horas</td>
          <td>R$560</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="schedule">
    <h2>Horário</h2>
    <p>Confira abaixo a nossa programação de aulas:</p>
    <Calendar />
  </section>

  <section id="contact">
    <h2>Contato</h2>
    <p>Para quaisquer dúvidas ou para se inscrever em nossos cursos, por favor, envie-nos um e-mail para:</p>
    <Contact />
  </section>
</main>
);
}

export default Main;