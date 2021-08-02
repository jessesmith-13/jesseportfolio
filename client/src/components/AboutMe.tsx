import * as React from 'react';
import { useEffect } from 'react';
import img from '../assets/img/jesse.png';
// import { AiOutlineTwitter } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";
// import { Fade } from 'react-reveal';
// import { StickyContainer } from 'react-sticky';

export const AboutMe: React.FC = () => {
  let audio = new Audio('/sample.mp3')

  const createRipple = () => {
    audio.play();
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const rightSideHeading = document.querySelector('.rightSideHeading');
      const rightSideDescription = document.querySelector('.rightSideDescription');
      const topLeft = document.querySelector('.topLeft');
      const bottomLeft = document.querySelector('.bottomLeft');
      if (entry.isIntersecting) {
        rightSideHeading.classList.add('rightSideMove');
        rightSideDescription.classList.add('rightSideMove');
        topLeft.classList.add('leftSideMove');
        bottomLeft.classList.add('leftSideMove');
        console.log('INTERSECTING');
      }
    })
  })

  useEffect(() => {
    observer.observe(document.querySelector('.introText'))
  })
  return (
    <div 
      id='about' 
      className='container aboutMeContainer'
    >
      <div className='left topLeft'>
  
          <h3 className='introText'>JESSE SMITH</h3>
        
      </div>
      <div className='left bottomLeft'>
        <img src={img} className='portrait'  onClick={createRipple}></img>
        <h3 className='introText2'>FULL-STACK WEB DEVELOPER</h3>
        <div className="iconContainer">
          <AiOutlineTwitter className='icon twitterIcon' size={30}/>
          <AiFillLinkedin className='icon linkedInIcon' size={30}/>
          <AiFillGithub className='icon githubIcon' size={30}/>
          <FcDocument className='icon resumeIcon' size={30}/>
        </div>
      </div>

      <div className="right topRight">
        <h3 className="rightSideHeading introText aboutHeading">ABOUT</h3>
      </div>
      <div className="right bottomRight">
        <p className='rightSideDescription'>
          I’m Jesse, a musician and restaurant manager turned programmer. At the start of the COVID-19 pandemic, both my careers were the hardest hit. I began designing a wordpress website and curriculum to give virtual guitar lessons, and fell in love with the creative process. A year and a half later, and now I am a full stack engineer who loves to inject creativity into my code. Feel free to say hi!
        </p>
      </div>
    </div>
  )
}