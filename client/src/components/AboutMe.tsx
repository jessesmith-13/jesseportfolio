import * as React from 'react';
import img from '../assets/img/jesse.png';

export const AboutMe: React.FC = () => {
  return (
    <div className='aboutMeContainer'>
      <img src={img} className='portrait'></img>
      <div className='introContainer'>
        <h3>Hi there! I'm</h3>
        <h3>Jesse Smith</h3>
        <h3>FULL-STACK WEB DEVELOPER</h3>
      </div>
      <div className='portraitBar'></div>
      <div className='aboutMeTextContainer'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}