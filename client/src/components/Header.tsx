import * as React from 'react';
// import { StickyContainer } from 'react-sticky';
// import { useState } from 'react';


export const Header: React.FC = () => {
  // const [activeClass, setActiveClass] = useState('home');

  const handleClick = (section: any) => {
    document.getElementById(section)!.scrollIntoView({ behavior: "smooth" });
    // setActiveClass(section);
    console.log(section);
  }

  // const handleActiveClass = (section: String) => {
  //   if (section === activeClass) {
  //     return 'active';
  //   }
  //   return undefined;
  // }

  return (
    <header className='navbar'>
      {/* <h1 className={handleActiveClass('home')} onClick={() => handleClick('home')}>JS</h1> */}
      <h1 id='navbarHome' onClick={() => handleClick('home')}>JS</h1>
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
        <h2 id='navbarAbout' onClick={() => handleClick('about')}>About</h2>
        <h2 id='navbarProjects' onClick={() => handleClick('projects')}>Projects</h2>
        <h2 id='navbarTechnologies' onClick={() => handleClick('technologies')}>Technologies</h2>
        <h2 id='navbarContact' onClick={() => handleClick('contact')}>Contact</h2>
        {/* <h2 className={handleActiveClass('about')} onClick={() => handleClick('about')}>About</h2>
        <h2 className={handleActiveClass('projects')} onClick={() => handleClick('projects')}>Projects</h2>
        <h2 className={handleActiveClass('technologies')} onClick={() => handleClick('technologies')}>Technologies</h2>
        <h2 className={handleActiveClass('contact')} onClick={() => handleClick('contact')}>Contact</h2> */}
      </div>
    </header>
  )
}