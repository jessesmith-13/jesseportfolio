import * as React from 'react';

export const Technologies: React.FC = () => {
  return (
    <div id='technologies' className='container technologiesSection'>
      <h2 className='heading'>TECHNOLOGIES</h2>
      <div className='technologiesContainer'>
        <div className="column column1">
          <h3>Front End</h3>
          <p>Bootstrap</p>
          <p>CSS3</p>
          <p>CSS Grid</p>
          <p>CSS Modules</p>
          <p>Flexbox</p>
          <p>HTML5</p>
          <p>JavaScript</p>
          <p>JQuery</p>
          <p>React</p>
          <p>React Native</p>
          <p>Styled Components</p>
        </div>
        <div className="column column2">
          <h3>Back End</h3>
          <p>Express</p>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>MySQL</p>
          <p>Node</p>
          <p>PostgreSQL</p>
          <p>RESTful API's</p>
        </div>
        <div className="column column3">
          <h3>Testing/Deployment</h3>
          <p>AWS (EC2)</p>
          <p>Brotli</p>
          <p>Docker</p>
          <p>CircleCI</p>
          <p>Jest</p>
          <p>K6</p>
          <p>Lighthouse</p>
          <p>Loader.io</p>
          <p>Mocha/Chai</p>
          <p>React Suspense/Lazy</p>
          <p>React Testing Library</p>
        </div>
        <div className="column column4">
          <h3>Dev Tools</h3>
          <p>Babel</p>
          <p>Chrome Devtools</p>
          <p>Git</p>
          <p>Git Kraken</p>
          <p>Npm</p>
          <p>Postman</p>
          <p>Trello</p>
          <p>VIM</p>
          <p>Webpack</p>
        </div>
      </div>
    </div>
  )
}