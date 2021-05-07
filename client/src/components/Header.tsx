import * as React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <h1>JS</h1>
      <div className="sections">
        <h2 className='headerHeading'>ABOUT</h2>
        <h2>PROJECTS</h2>
        <h2>TECHNOLOGIES</h2>
        <h2>CONTACT</h2>
      </div>
    </header>
  )
}