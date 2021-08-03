import * as React from 'react';
import { useEffect } from 'react';
import img from '../assets/img/jesse.png';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FcDocument } from "react-icons/fc";

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
          <a href="https://twitter.com/Holdenadream" target='_blank'>
            <AiOutlineTwitter className='icon twitterIcon' size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/jesselsmith713/" target='_blank'>
            <AiFillLinkedin className='icon linkedInIcon' size={30}/>
          </a>
          <a href="https://github.com/jessesmith-13" target='_blank'>
            <AiFillGithub className='icon githubIcon' size={30}/>
          </a>
          <a href="https://docs.google.com/document/d/19VLx5uw38sRb_2oMOzNH4953YtZZfzYcYuEze4-w4p4/edit?usp=sharing" target='_blank'>
            <FcDocument className='icon resumeIcon' size={30}/>
          </a>
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