import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div id="projects" className="project">
      <div className="project-title">
        <h1><span>Projects</span></h1>
      </div>
      <div className="project-container">
      <div className='project-box'>
      <h1><a href="#">Ecommerce Platform</a> --  Stack: React, Node.js, MySQL</h1>
      <ul>
        <li>Developed a sophisticated web-based platform enabling users to effortlessly browse, select, and purchase a diverse
        range of apparel.</li>
      </ul>
      </div>
      <div className='project-box'>
      <h1><a href="#">Hotel Mangement System</a> --  Stack: React, Node.js, MySQL</h1>
      <ul>
        <li>A hotel management system web project is a comprehensive platform designed to provide an intuitive interface for
both staff and guests, enhancing operational efficiency and customer experience. Key features include reservation
management and payment processing.</li>
        
      </ul>
      </div>
      <div className='project-box'>
      <h1><a href="#">Blog Post</a> --  Stack: HTML, CSS, JavaScript, Node.js, Express, MongoDB</h1>
      <ul>
        <li>The Blog Page, a full stack project is an interactive web application that handles blog post creation, editing, and
        deletion, Integrated with MongoDB to store and manage blog posts.</li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Projects
