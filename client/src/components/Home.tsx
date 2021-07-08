import * as React from 'react';
import img from '../assets/img/jesse.png';
// import { AiOutlineTwitter } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";

// import { StickyContainer } from 'react-sticky';

export const Home: React.FC = () => {
  const createRipple = () => {
    console.log('hi');
  }

  return (
    <div id='home' className='container homeContainer'>
      {/* <div className='portraitContainer'> */}
      <div style={{display: 'flex'}}>
        <h3 className='introText' style={{marginRight: '2em'}}>Hi there!  </h3>
        <h3 className='introText'>I'm Jesse Smith</h3>
      </div>
        <img src={img} className='portrait'  onClick={createRipple}></img>
      {/* </div> */}
      <h3>FULL-STACK WEB DEVELOPER</h3>
      <div className="iconContainer">
        <AiOutlineTwitter size={30}/>
        <AiFillLinkedin size={30}/>
        <AiFillGithub size={30}/>
        <FcDocument size={30}/>
      </div>
      {/* <div className='introContainer'> */}
      {/* </div> */}
      {/* <div className='portraitBar'> */}
      {/* </div> */}
    </div>
  )
}