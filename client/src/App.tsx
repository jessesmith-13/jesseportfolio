import * as React from 'react';
import { useRef } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';


export const App: React.FC = () => {

  const home = useRef(null);
  const executeScroll = (location: string) => {
    location.current.scrollIntoView();
  }

  return (
    <>
      <div ref={home}>
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Technologies />
        <Contact />
        <button onClick={executeScroll}></button>
      </div>
    </>
  )
}