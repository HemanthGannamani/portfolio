import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import food from '../../assets/food.png'
import coffee from '../../assets/coffee.png'
const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project1">
        <h2>Food Delivery<hr style={{width:"17%"}}/></h2>
        <p>This food delivery website is an online platform that connects customers with local restaurants. It allows users to browse through menus, place orders, and have their food delivered to their doorstep.</p>
        <img src={food} alt="" />
        <a href="https://food-delivery-phi-murex.vercel.app/" target="_blank" rel="noopener noreferrer">Project link-Food delivery Website</a>
        <h2> Coffee Hub <hr style={{width:"14%"}}/></h2>
        <p>This coffee hub is more than just a coffee shop; it's a community-centric space dedicated to celebrating coffee in all its forms. It offers a diverse range of high-quality coffee beverages, prepared by knowledgeable baristas.</p>
        <img src={coffee} alt="" />
        <a href="https://coffee-hub.vercel.app/" target="_blank" rel="noopener noreferrer">Project link-Coffee hub Website</a>
      </div>
    </div>
  )
}

export default Projects
