import * as React from 'react';
// import { Link } from 'react-scroll';
import { StickyContainer } from 'react-sticky';
import { useState } from 'react';

export const Header: React.FC = () => {
  const [activeClass, setActiveClass] = useState('home');

  const handleClick = (section: String) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setActiveClass(section);
  }

  const handleClass = (section: String) => {
    if (section === activeClass) {
      return 'active';
    }
  }

  return (
    <StickyContainer className='navbar'>
      <h1 className={handleClass('home')} onClick={() => handleClick('home')}>JS</h1>
      {/* <Link 
          className='h1'
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-70}
          duration={500}
          >JS
        </Link> */}
      <div className="sections">
        {/* <Link 
          className='h2'
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-70}
          duration={500}
          >ABOUT
        </Link>
        <Link 
          className='h2'
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-70}
          duration={500}
          >PROJECTS
        </Link>
        <Link 
          className='h2'
          activeClass="active"
          to="technologies"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-70}
          duration={500}
          >TECHNOLOGIES
        </Link>
        <Link 
          className='h2'
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-70}
          duration={500}
          >CONTACT
        </Link> */}
        <h2 className={handleClass('about')} onClick={() => handleClick('about')}>ABOUT</h2>
        <h2 className={handleClass('projects')} onClick={() => handleClick('projects')}>PROJECTS</h2>
        <h2 className={handleClass('technologies')} onClick={() => handleClick('technologies')}>TECHNOLOGIES</h2>
        <h2 className={handleClass('contact')} onClick={() => handleClick('contact')}>CONTACT</h2>
      </div>
    </StickyContainer>
  )
}