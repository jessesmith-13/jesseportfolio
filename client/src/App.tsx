import * as React from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
// import { Button } from 'react-bootstrap';


export const App: React.FC = () => {

  return (
    <>
      <div className='mainContainer'>
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </>
  )
}