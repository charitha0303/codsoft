import React from 'react'
import './Hero.css'
import profile_img from '../../assets/photo.jpg'
const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Bada Sree Charitha,</span></h1>
      <h2>full stack developer based in India.</h2>
      <p>I am a Computer Science undergraduate with a solid foundation in software development, algorithms, and data structures. I have hands-on experience in web development, and am passionate about applying my skills to real-world challenges through innovative solutions.</p>
      <div className="hero-action">
        <div className="hero-connect"><a href="https://github.com/charitha0303" target="_blank" rel="noopener noreferrer">Github</a></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1kTPt-kTFTiFKKlqh_uQWd9EyRHY8kjms/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">My resume</a></div>

      </div>
    </div>
  )
}

export default Hero
