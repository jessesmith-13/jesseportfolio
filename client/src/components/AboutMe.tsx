import * as React from 'react';
// import { StickyContainer } from 'react-sticky';

export const AboutMe: React.FC = () => {
  return (
    <div id='about' className="container aboutMeSection">
      <div className='aboutMeTextContainer'>
        <h2 style={{alignSelf: 'flex-start'}}>ABOUT ME</h2>
        <p>
          I'm Jesse Smith, a musician and manager turned programmer who loves bringing my creativity into web and mobile development.
        </p>
      </div>
    </div>
  )
}