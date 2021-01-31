import React from 'react';
import imgsrc from '../lib/imgs/DSC_4056.jpg';

// eslint-disable-next-line arrow-body-style
const About = () => {
  return (
    <div className="about">
      <div className="what">
        <div className="what__header">
          What do I do?
        </div>
        <div className="what__content">
          <img className="what__img" src={imgsrc} alt="Seamus Moore" />
          <div className="what__para">
            First year IT Web Development at NSCC. Aspiring Full Stack Developer.
            Developing responsive, elegant solutions to complex problems is a goal of mine.
            I am flexible, self-motivated looking for an innovating outlet for my creativity.
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__header">
          How do I do it?
        </div>
        <div className="skills__content">
          <div className="skills__group">
            <span className="skills__subheader">
              I am comfortable working with these technologies:
            </span>
            <div className="skills__list">
              <div className="skills__item">Python</div>
              <div className="skills__item">JavaScript</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">Sass</div>
              <div className="skills__item">React</div>
              <div className="skills__item">SQL</div>
            </div>
          </div>
          <div className="skills__group">
            <span className="skills__subheader">
              I am developing my skills in these technologies:
            </span>
            <div className="skills__list">
              <div className="skills__item">React-Spring</div>
              <div className="skills__item">Jest</div>
              <div className="skills__item">RESTful APIs</div>
              <div className="skills__item">Django</div>
              <div className="skills__item">Ruby</div>
              <div className="skills__item">TypeScript</div>
              <div className="skills__item">Java</div>
              <div className="skills__item">Node.js</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact__header">
          Looking to contact me?
        </div>
        <div className="contact__content">
          <a className="contact__link" href="mailto:mooresa0@gmail.com">mooresa0@gmail.com</a>
          <a className="contact__link contact__link--span" href="https://www.linkedin.com/in/seamus-moore-ns/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default About;
