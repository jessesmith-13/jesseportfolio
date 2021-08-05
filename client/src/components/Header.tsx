import * as React from 'react';

export const Header: React.FC = () => {

  const handleClick = (section: any) => {
    document.getElementById(section)!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className='navbar'>
      <h1 id='navbarHome' onClick={() => handleClick('home')}>JS</h1>
      <div className="sections">
        <h2 id='navbarAbout' onClick={() => handleClick('about')}>About</h2>
        <h2 id='navbarProjects' onClick={() => handleClick('projects')}>Projects</h2>
        <h2 id='navbarTechnologies' onClick={() => handleClick('technologies')}>Technologies</h2>
        <h2 id='navbarContact' onClick={() => handleClick('contact')}>Contact</h2>
        </div>
    </header>
  )
}