import React, { useState } from 'react';
import './infames.scss';

const Infame = props => {

  const bgImage = {
    background: `url(${props.photo}) no-repeat`,
    backgroundSize: 'cover',
  }
  
  return (
  <a id={'crew-link'+props.i} className={'crew-link'} href="">{props.artist}
    <div className={'crew-hover glitch'} style={bgImage}>
      <div className={'crew-hover-glitch glitch-inner '} style={bgImage}>
        <div className={'glitch-inner-2'} style={bgImage}/>
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