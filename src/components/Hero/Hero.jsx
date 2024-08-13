import React from 'react';
import './Hero.css';
import passportsizeimg from '../../assets/passport size img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import myresume from '../../assets/myresume.pdf';


const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Hero = () => {
  const openResume = () => {
    window.open(myresume, '_blank'); 
  };

  return (
    <div id='home' className='hero'>
      <img src={passportsizeimg} alt="Hemanth" />
      <h1><span>I'm Hemanth,</span> a frontend developer based in India.</h1>
      <p>I am a highly motivated student with a passion for frontend development, seeking opportunities to apply programming skills in creating innovative solutions.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <button onClick={openResume} style={buttonStyle}>My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

