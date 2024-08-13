import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const Education = () => {
  return (
    <div id='education' className='education'>
        <div className='education-title'>
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className='education-marks'>
           <h3>Parul Institute Of Engineering and Technology</h3>
           <h4>CGPA:7.29/10</h4>
           <br />
           <h3>Vidya Vikas Junior College</h3>
           <h4>PERCENTAGE:93.90/100</h4>
           <br />
           <h3>Vidya Vikas High School</h3>
           <h4>CGPA:9.7/10</h4> 
        </div>
      
    </div>
  )
}

export default Education
