import * as React from 'react';
// import { useRef } from 'react';
// import { StickyContainer } from 'react-sticky';
// import useScrollSnap from 'react-use-scroll-snap';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi"

export const Contact: React.FC = () => {
  // const scrollRef = useRef(null);
  // useScrollSnap({ref: scrollRef, duration: 100, delay: 50})
  return (
    <div id='contact' className="container contactSection">
      <div className="contactContainer">
        <h2 className="contactHeading">CONTACT</h2>
        <div className="iconContainer">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jesselsmith713@gmail.com" target="_blank">
            <HiOutlineMail className='contactIcon emailIcon' size={75} />
          </a>
          <a href="https://www.linkedin.com/in/jesselsmith713/" target="_blank">
            <AiFillLinkedin className='contactIcon linkedInIcon' size={75} />
          </a>
          <a href="https://github.com/jessesmith-13" target="_blank">
            <AiFillGithub className='contactIcon githubIcon' size={75} />
          </a>
        </div>
      </div>
    </div>
  )
}