import * as React from 'react';
import img from '../assets/img/jesse.png';
// import { AiOutlineTwitter } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";
import { StickyContainer } from 'react-sticky';

export const Home: React.FC = () => {
  return (
    <StickyContainer id='home' className='container homeContainer'>
      <img src={img} className='portrait'></img>
      <div className="iconContainer">
        <AiOutlineTwitter size={30}/>
        <AiFillLinkedin size={30}/>
        <AiFillGithub size={30}/>
        <FcDocument size={30}/>
      </div>
      <div className='introContainer'>
        <h3 className='introText'>Hi there! I'm</h3>
        <h3>Jesse Smith</h3>
      </div>
      <div className='portraitBar'>
        <h3>FULL-STACK WEB DEVELOPER</h3>
      </div>
    </StickyContainer>
  )
}