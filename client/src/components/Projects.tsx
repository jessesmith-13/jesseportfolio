import * as React from 'react';
import smoveLandingPage from '../assets/img/smove.png';
import smoveTaskList from '../assets/img/smoveTaskList.png';
import smoveMovingServices from '../assets/img/smoveMovingServices.png';
import wallace1 from '../assets/img/wallace1.png'
import wallace2 from '../assets/img/wallace2.png'
import wallace3 from '../assets/img/wallace3.png'
import Carousel from 'react-material-ui-carousel'
import flixgrubGif from '../../../public/flixgrub.gif';
import { AiFillGithub } from 'react-icons/ai';

export const Projects: React.FC = () => {
  return (
    <div id='projects' className='container projectsSection'>
      <h2 className='heading projectsHeading'>PERSONAL PROJECTS</h2>
      <div className='projectsContainer'>
        <div className='projectBox project1Description rightSideProjectDescription'>
          <a href="https://github.com/BlueOcean-Smove/Smove" target='_blank'>
            <h3 className='projectName'>
              Smove
            </h3>
            <AiFillGithub className='projectsGithubIcon' size={30}/>
          </a>
          <p className='bodyText projectText'>
            A one-stop-platform for users to manage their move with ease!
            Smove integrates all the pieces of moving including finding vendors, tracking tasks and inventory, and collaborating with family & friends.
          </p>
        </div>
          <Carousel 
            autoPlay={false} 
            animation={'slide'}
            indicators={false}
            
            className='projectBox projectImageContainer project1ImageContainer'
          >
            <a href="https://github.com/BlueOcean-Smove/Smove" target='_blank'>
              <img className='projectImage project1Image' src={smoveLandingPage}></img>
            </a>
            <a href="https://github.com/BlueOcean-Smove/Smove" target='_blank'>
              <img className='projectImage project1Image' src={smoveTaskList}></img>
            </a>
            <a href="https://github.com/BlueOcean-Smove/Smove" target='_blank'>
              <img className='projectImage project1Image' src={smoveMovingServices}></img>
            </a>
          </Carousel>

        <div className='projectBox project2Description leftSideProjectDescription'>
          <a href="https://github.com/jessesmith-13/flixgrub" target='_blank'>
            <AiFillGithub className='projectsGithubIcon' size={30}/>
            <h3 className='projectName'>
              FlixGrub
            </h3>
          </a>
          <p className='bodyText projectText'>
            A mobile app that allows users to search for nearby drive in movie theaters, see movie times, book tickets, and even purchase food from their menus!
          </p>
        </div>
        <div className="projectBox projectImageContainer project2ImageContainer">
          <a href="https://github.com/jessesmith-13/flixgrub" target='_blank'>
            <img className='projectImage project2Image' src={flixgrubGif} alt="flixgrub" />
          </a>
        </div>

        <div className='projectBox project3Description rightSideProjectDescription'>
          <a href="https://github.com/jessesmith-13/Wallace-Corporation">
            <h3 className='projectName'>
              Wallace Corporation
            </h3>
            <AiFillGithub className='projectsGithubIcon' size={30}/>
          </a>
          <p className='bodyText projectText'>
            An e-commerce platform that allows users the ability to cycle through products, see reviews and ratings, questions and answers about a specific product.
          </p>
        </div>
        <div className='projectBox projectImageContainer project3ImageContainer'>
          <Carousel 
            autoPlay={false} 
            animation={'slide'}
            indicators={false}
            className='projectBox projectImageContainer project1ImageContainer'
          >
            <a href="https://github.com/jessesmith-13/Wallace-Corporation" target='_blank'>
              <img className='projectImage project1Image' src={wallace1}></img>
            </a>
            <a href="https://github.com/jessesmith-13/Wallace-Corporation" target='_blank'>
              <img className='projectImage project1Image' src={wallace2}></img>
            </a>
            <a href="https://github.com/jessesmith-13/Wallace-Corporation" target='_blank'>
              <img className='projectImage project1Image' src={wallace3}></img>
            </a>
          </Carousel>
        </div>
      </div>
    </div>
  )
}