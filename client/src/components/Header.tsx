import * as React from 'react';
import { Link } from 'react-scroll';

export const Header: React.FC = () => {
  return (
    <header>
      {/* <h1>JS</h1> */}
      <Link 
          className='h1'
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-70}
          duration={500}
        >JS
        </Link>
      <div className="sections">
        <Link 
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
        </Link>
        {/* <h2 className='headerHeading'>ABOUT</h2>
        <h2>PROJECTS</h2>
        <h2>TECHNOLOGIES</h2>
        <h2>CONTACT</h2> */}
      </div>
    </header>
  )
}