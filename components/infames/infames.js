import React, { useState } from 'react';
import './infames.scss';
import Link from "next/link";

const Infame = props => {

  const bgImage = {
    background: `url(${!props.photo ? '/random/malcriaoahdzousa.jpg' : props.photo}) center no-repeat`,
    backgroundSize: 'cover',
  }
  
  return (
    <Link href="/crew/[pid] " as={`/crew/${props.artist}`} >
      <a id={'crew-link'+props.i} className={'crew-link'}>{props.artist}
        <div className={'crew-hover glitch'} >
          {/* <img src={props.photo} className={'crew-hover-img'} /> */}
          <div className={'transformDiv'} style={{width: '100%', height:'300px', background: `url(${!props.photo ? '/random/malcriaoahdzousa.jpg' : props.photo}) center no-repeat`,
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
    </Link>
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