// import { Update } from '@material-ui/icons';
import * as React from 'react';
// import { AiOutlineTwitter } from 'react-icons/fa';

// import { StickyContainer } from 'react-sticky';

export const Home: React.FC = () => {
  // let audio = new Audio('/sample.mp3')

  // const createRipple = () => {
  //   audio.play();
  // }

  document.addEventListener("mousemove", (event) => {
    const circle: HTMLElement | null = document.getElementById('circle1');
    let mousex = event.clientX; // Gets Mouse X
    let mousey = event.clientY; // Gets Mouse Y
   
    // if (!!circle1) {
      // circle.style.setProperty('background-color', 'yellow');
      // console.log(circle);
      // }
    circle.style.setProperty('--mouse-x', mousex.toString());
    circle.style.setProperty('--mouse-y', mousey.toString());
    // circle.style.setProperty('background-color', 'red');
    
    
    // console.log([mousex, mousey]); // Prints data
    // console.log(circle);
  });

//   const container: HTMLElement = document.getElementById('home');
//   const circle1: HTMLElement = document.getElementById('circle1');
//   console.log(container);
//   let counter: any = 0;
//   let updateRate: any = 10;
//   const isTimeToUpdate = () => {
//     return counter++ % updateRate === 0;
//   }
//   const onMouseEnterHandler = (e) => {
//     update(e);
//   }
//   const onMouseLeaveHandler = () => {
//     circle1.style.backgroundColor = 'red';
//   }
//   const onMouseMoveHandler = (e) => {
//     if (isTimeToUpdate()) {
//       update(e);
//     }
//   }
//   if (container) {
//     container.onmouseenter = onMouseEnterHandler;
//     container.onmouseleave = onMouseLeaveHandler;
//     container.onmousemove = onMouseMoveHandler;

//   }
  

//   // Mouse 
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function(event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function(e) {
//       if (e) {
//         this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
//         this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
//       }
//     },
//     show: function() { return '(' + this.x + ', ' + this.y + ')'; }
//   }
//   // Track the mouse position relative to the center of the container.
//   mouse.setOrigin(container);

//   var update = (e) => {
//     mouse.updatePosition(e);
//     updateTransformStyle(
//       (mouse.y / circle1.offsetHeight/2).toFixed(2),
//       (mouse.x / circle1.offsetWidth/2).toFixed(2)
//     );
//   };

// var updateTransformStyle = function(x, y) {
//   var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//   circle1.style.transform = style;
//   circle1.style.webkitTransform = style;
//   circle1.style.mozTransform = style;
//   circle1.style.msTransform = style;
//   circle1.style.oTransform = style;
// };
  return (
    <div 
      id='home' 
      className='container homeContainer'
    >
      <div id='circle1' className="circle circle1">
        <div className="circle circle2">
          <div className="circle circle3">
            <div className="circle circle4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}