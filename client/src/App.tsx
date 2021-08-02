import * as React from 'react';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';


export const App: React.FC = () => {
  const addActiveClassHome = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const home = document.querySelector('#navbarHome');
      if (entry.isIntersecting) {
        home.classList.add('active');
        return;
      }
      home.classList.remove('active');
    })
  })

  const addActiveClassAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const home = document.querySelector('#navbarAbout');
      if (entry.isIntersecting) {
        home.classList.add('active');
        return;
      }
      home.classList.remove('active');
    })
  })

  const addActiveClassProjects = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const home = document.querySelector('#navbarProjects');
      if (entry.isIntersecting) {
        home.classList.add('active');
        return;
      }
      home.classList.remove('active');
    })
  })
  const addActiveClassTechnologies = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const home = document.querySelector('#navbarTechnologies');
      if (entry.isIntersecting) {
        home.classList.add('active');
        return;
      }
      home.classList.remove('active');
    })
  })
  const addActiveClassContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const home = document.querySelector('#navbarContact');
      if (entry.isIntersecting) {
        home.classList.add('active');
        return;
      }
      home.classList.remove('active');
    })
  })
  
    useEffect(() => {
      addActiveClassHome.observe(document.querySelector('#homeNavbarFocus'));
      addActiveClassAbout.observe(document.querySelector('.introText'));
      addActiveClassProjects.observe(document.querySelector('.projectBox'));
      addActiveClassTechnologies.observe(document.querySelector('.column1'));
      addActiveClassContact.observe(document.querySelector('.contactIcon'));
    })

  return (
    <>
      <Header />
      <div className='mainContainer'>
        <Home />
        <AboutMe />
        <Projects />
        <Technologies />
        <Contact />
      </div>
    </>
  )
}