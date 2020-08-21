import React, { useState } from 'react';
import './infames.scss';

const Infame = props => {

  const bgImage = {
    background: `url(${props.photo}) center no-repeat`,
    backgroundSize: 'cover',
  }

  if (typeof document !== 'undefined') {

    let el =  document.querySelector('#crew-link'+props.i)
    let menu = document.querySelector('#crew-link'+props.i+' .crew-hover.glitch .transformDiv'),
    w = el.offsetWidth, //window width
    h = el.offsetHeight; //window height
    
  const mouseMoveHandler = (e) => {
    let offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = menu.getAttribute('data-offset'),
      transformPoster = 'rotateX(' + -offsetY * offsetPoster + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform
  
  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }
  
  //poster transform
  menu.style.transform = transformPoster;
  }
  
  // el.addEventListener("mousemove", mouseMoveHandler)
  }


  
  return (
  <a id={'crew-link'+props.i} className={'crew-link'} href="">{props.artist}
    <div className={'crew-hover glitch'} >
      {/* <img src={props.photo} className={'crew-hover-img'} /> */}
      <div className={'transformDiv'} style={{width: '100%', height:'300px', background: `url(${props.photo}) center no-repeat`,
    backgroundSize: 'cover',}} data-offset="10">
        <div className={'crew-hover-glitch glitch-inner '} style={bgImage} >
          <div className={'glitch-inner-2'} style={bgImage}/>
        </div>
      </div>
      <div className={'crew-hover-text'}>
        <span className={'text'}>{props.artist}</span>
        <span className={'second-text'}>
          <span className={'second-text-inner'}>{props.artist}</span>
        </span>
      </div>
    </div>
  </a>
)};

const infamesWrapper = {
  display: "grid",
  gridTemplateColumns: "20% 60% 20%",
  marginBottom: "150px"
}
const infamesContainer = {
  display: "grid",
  gridTemplateColumns: "50% 50%"
}

const Infames = props => (
  <section style={infamesWrapper}>
    <div/>
    <div style={infamesContainer}>
      {props.infames.map( (infame,i) => (
        <div key={infame.artist+i}>
          <Infame 
          i={i}
          artist={infame.artist}
          photo={infame.photo}
          />
        </div>
      ))}
    </div>
    <div/>
  </section>
);

export default Infames;