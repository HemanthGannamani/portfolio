import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import passportsizeimg from '../../assets/passport size img.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
       <div className="about-left">
        <img src={passportsizeimg} alt="" />
       </div>
       <div className="about-right">
        <div className="about-para">
            <p>I am a highly motivated student with a passion for frontend development seeking opportunities to apply programming skills in creating innovative solutions. Proficient in list relevant programming languages or technologies with a strong foundation in algorithms and problem-solving. Collaborative team player with excellent communication skills and a commitment to continuous learning and growth.</p>
            <p>my passion for frontend development is not only reflective in my extensive experience but also in the dedication I bring to each project.</p>
        </div>
        <div className="about-skills">
        <div className="about-skill"><h1>SKILLS</h1><hr style={{width:"25%"}}/></div>
            <div className="about-skill"><p>HTML</p></div>
            <div className="about-skill"><p>CSS</p></div>
            <div className="about-skill"><p>JavaScript</p></div>
            <div className="about-skill"><p>Reactjs</p></div>
            <div className="about-skill"><p>Java</p></div>
            <div className="about-skill"><p>Python</p></div>
        </div>
       </div> 
      </div>
    </div>
  )
}

export default About
