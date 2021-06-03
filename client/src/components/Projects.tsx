import * as React from 'react';
import project1 from '../assets/img/smove.png';
import landingScreen from '../assets/img/landingScreen.png';
import listViewScreen from '../assets/img/listViewScreen.png';
import profileScreen from '../assets/img/profileScreen.png';
// import { StickyContainer } from 'react-sticky';

export const Projects: React.FC = () => {
  return (
    <div id='projects' className='container projectsSection'>
      <h2>PERSONAL PROJECTS</h2>
      <div className='projectsContainer'>
        <div className='projectImageContainer project1ImageContainer'>
          <img className='project1Image' src={project1}></img>
        </div>
        <div className='project1Description rightSideDescription'>
          <h3>
            Smove
          </h3>
          <p>
            Smove is a one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
        <div className='projectImageContainer project2ImageContainer'>
          <img className='project2Image' src={landingScreen} ></img>
          <img className='project2Image' src={listViewScreen} ></img>
          <img className='project2Image' src={profileScreen} ></img>
        </div>
        <div className='project2Description leftSideDescription'>
          <h3>
            FlixGrub
          </h3>
          <p>
            Smove is a one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
        <div className='projectImageContainer project3ImageContainer'>
          <img></img>
        </div>
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