import * as React from 'react';
import img from '../assets/img/jesse.png';
// import { AiOutlineTwitter } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";
import { Fade } from 'react-reveal';
// import { StickyContainer } from 'react-sticky';

export const AboutMe: React.FC = () => {
  let audio = new Audio('/sample.mp3')

  const createRipple = () => {
    audio.play();
  }

  return (
    <div 
      id='about' 
      className='container aboutMeContainer'
    >
      <Fade
        duration={3000}
        left
      >
        <div className='topLeftGrid'>
          <div style={{display: 'flex'}}>
            <h3 className='introText'>JESSE&nbsp;</h3>
            <h3 className='introText'>SMITH</h3>
          </div>
        </div>
      </Fade>
      <Fade
        duration={3000}
        left
      >
        <div className='bottomLeftGrid'>
          <img src={img} className='portrait'  onClick={createRipple}></img>
          <h3 className='introText2'>FULL-STACK WEB DEVELOPER</h3>
          <div className="iconContainer">
            <AiOutlineTwitter className='icon' size={30}/>
            <AiFillLinkedin className='icon' size={30}/>
            <AiFillGithub className='icon' size={30}/>
            <FcDocument className='icon' size={30}/>
          </div>
        </div>
      </Fade>

      <div className="topRightGrid">
        <Fade
          duration={3000}
          right
        >
          <h3 className="introText aboutHeading">ABOUT</h3>
        </Fade>
      </div>
      <div className="bottomRightGrid">
        <Fade
        duration={2800}
          right
        >
          <p>
            I’m Jesse, a musician and restaurant manager turned programmer. At the start of the COVID-19 pandemic, both my careers were the hardest hit. I began designing a wordpress website and curriculum to give virtual guitar lessons, and fell in love with the creative process. A year and a half later, and now I am a full stack engineer who loves to inject creativity into my code. Feel free to say hi!
          </p>
        </Fade>
      </div>
    </div>
  )
}