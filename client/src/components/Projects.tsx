import * as React from 'react';
import smoveLandingPage from '../assets/img/smove.png';
// import landingScreen from '../assets/img/landingScreen.png';
// import listViewScreen from '../assets/img/listViewScreen.png';
// import profileScreen from '../assets/img/profileScreen.png';
import smoveTaskList from '../assets/img/smoveTaskList.png';
import smoveMovingServices from '../assets/img/smoveMovingServices.png';
import wallace1 from '../assets/img/wallace1.png'
import wallace2 from '../assets/img/wallace2.png'
import wallace3 from '../assets/img/wallace3.png'
// import { StickyContainer } from 'react-sticky';
import Carousel from 'react-material-ui-carousel'
import flixgrubGif from '../../../public/flixgrub.gif';

export const Projects: React.FC = () => {
  return (
    <div id='projects' className='container projectsSection'>
      <h2 className='heading projectsHeading'>PERSONAL PROJECTS</h2>
      <div className='projectsContainer'>
        <Carousel 
          autoPlay={false} 
          animation={'slide'}
          // indicators={false}
          // navButtonsAlwaysVisible={true}
          className='projectBox projectImageContainer project1ImageContainer'
        >
          <img className='projectImage project1Image' src={smoveLandingPage}></img>
          <img className='projectImage project1Image' src={smoveTaskList}></img>
          <img className='projectImage project1Image' src={smoveMovingServices}></img>
        </Carousel>
        <div className='projectBox project1Description rightSideDescription'>
          <h3 className='heading'>
            Smove
          </h3>
          <p className='bodyText projectText'>
            A one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
        {/* <Carousel className='projectImageContainer project2ImageContainer'>
          <img className='projectImage project2Image' src={landingScreen} ></img>
          <img className='projectImage project2Image' src={listViewScreen} ></img>
          <img className='projectImage project2Image' src={profileScreen} ></img>
        </Carousel> */}
        <div className="projectBox projectImageContainer project2ImageContainer">
          <img className='projectImage project2Image' src={flixgrubGif} alt="flixgrub" />
        </div>
        <div className='projectBox project2Description leftSideDescription'>
          <h3 className='heading'>
            FlixGrub
          </h3>
          <p className='bodyText projectText'>
            Smove is a one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
        <div className='projectBox projectImageContainer project3ImageContainer'>
          <Carousel 
            autoPlay={false} 
            className='projectBox projectImageContainer project1ImageContainer'
          >
          <img className='projectImage project1Image' src={wallace1}></img>
          <img className='projectImage project1Image' src={wallace2}></img>
          <img className='projectImage project1Image' src={wallace3}></img>
          </Carousel>
        </div>
        <div className='projectBox project3Description rightSideDescription'>
          <h3 className='heading'>
            Wallace Corporation
          </h3>
          <p className='bodyText projectText'>
            An e-commerce platform that allows users the ability to cycle through products, see reviews and ratings, questions and answers about a specific product.
          </p>
        </div>
      </div>
    </div>
  )
}