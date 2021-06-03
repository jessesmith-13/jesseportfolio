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
          <button><HiOutlineMail className='contactIcon emailIcon' size={75} /></button>
          <AiFillLinkedin className='contactIcon linkedInIcon' size={75} />
          <AiFillGithub className='contactIcon githubIcon' size={75} />
        </div>
      </div>
    </div>
  )
}