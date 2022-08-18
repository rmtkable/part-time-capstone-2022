import React from 'react'
import { Button } from './Button';
import '../styles/HeroSection.css';
import Video from '../videos/Cinci.mp4';


function HeroSection() {
  return (
    <div className='hero-container'>
<video src="/videos/Cinci.mp4" autoPlay loop muted />
<h1>CINCINNATI AWAITS</h1>
<p>Where will you go?</p>
<div className="hero-btns">
  <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
  GET STARTED
</Button>
  <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         <i className='far fa-play-circle' />
        </Button>
</div>
   <video id="heroVideo" autoPlay loop muted>
          <source src={Video} type='video/mp4' />
        </video>
    </div>
  )
}

export default HeroSection