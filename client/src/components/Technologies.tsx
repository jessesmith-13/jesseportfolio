import * as React from 'react';
// import { StickyContainer } from 'react-sticky';

export const Technologies: React.FC = () => {
  return (
    <div id='technologies' className='container technologiesSection'>
      <h2 className='heading'>TECHNOLOGIES</h2>
      <div className='technologiesContainer'>
        <div className="column column1">
          <h3>Front End</h3>
          <p>JavaScript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React</p>
          <p>React Native</p>
          <p>CSS Modules</p>
          <p>Styled Components</p>
          <p>Bootstrap</p>
          <p>CSS Grid</p>
          <p>Flexbox</p>
          <p>JQuery</p>
        </div>
        <div className="column column2">
          <h3>Back End</h3>
          <p>Node</p>
          <p>Express</p>
          <p>RESTful API's</p>
          <p>MySQL</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>Mongoose</p>
        </div>
        <div className="column column3">
          <h3>Testing/Deployment</h3>
          <p>Docker</p>
          <p>AWS (EC2)</p>
          <p>Jest</p>
          <p>React Testing Library</p>
          <p>Mocha/Chai</p>
          <p>Lighthouse</p>
          <p>Brotli</p>
          <p>React Suspense/Lazy</p>
          <p>CircleCI</p>
          <p>Loader.io</p>
          <p>K6</p>
        </div>
        <div className="column column4">
          <h3>Dev Tools</h3>
          <p>VIM</p>
          <p>Git</p>
          <p>Git Kraken</p>
          <p>Postman</p>
          <p>Webpack</p>
          <p>Babel</p>
          <p>Npm</p>
          <p>Trello</p>
          <p>Chrome Devtools</p>
        </div>
      </div>
    </div>
  )
}