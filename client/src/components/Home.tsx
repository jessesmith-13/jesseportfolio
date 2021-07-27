import * as React from 'react';
import img from '../assets/img/jesse.png';
// import { AiOutlineTwitter } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";

// import { StickyContainer } from 'react-sticky';

export const Home: React.FC = () => {
  let audio = new Audio('/sample.mp3')

  const createRipple = () => {
    audio.play();
  }

  return (
    <div 
      id='home' 
      className='container homeContainer'
    >
      {/* <div className='portraitContainer'> */}
      <div style={{display: 'flex'}}>
        <h3 className='introText'>JESSE&nbsp;</h3>
        <h3 className='introText'>SMITH</h3>
      </div>
        <img src={img} className='portrait'  onClick={createRipple}></img>
      {/* </div> */}
      <h3 className='introText2'>FULL-STACK WEB DEVELOPER</h3>
      <div className="iconContainer">
        <AiOutlineTwitter className='icon' size={30}/>
        <AiFillLinkedin className='icon' size={30}/>
        <AiFillGithub className='icon' size={30}/>
        <FcDocument className='icon' size={30}/>
      </div>
      {/* <div className='introContainer'> */}
      {/* </div> */}
      {/* <div className='portraitBar'> */}
      {/* </div> */}
    </div>
  )
}