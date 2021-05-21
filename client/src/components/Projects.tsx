import * as React from 'react';
import project1 from '../assets/img/smove.png';
// import { StickyContainer } from 'react-sticky';

export const Projects: React.FC = () => {
  return (
    <div id='projects' className='container projectsSection'>
      <h2>PERSONAL PROJECTS</h2>
      <div className='projectsContainer'>
        <img src={project1} className='projectImage project1Image'></img>
        <div className='project1Description rightSideDescription'>
          <h3>
            Smove
          </h3>
          <p>
            Smove is a one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
        <img className='projectImage project2Image'></img>
        <div className='project2Description leftSideDescription'>
          <h3>
            Smove
          </h3>
          <p>
            Smove is a one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
        <img className='projectImage project3Image'></img>
        <div className='project3Description rightSideDescription'>
          <h3>
            Smove
          </h3>
          <p>
            Smove is a one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
      </div>
    </div>
  )
}