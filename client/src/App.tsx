import * as React from 'react';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';


export const App: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
    </>
  )
}