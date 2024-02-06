import React from 'react'
import AboutMe from './about-img.jpg'
import './about.css'
import {MdDeveloperMode} from 'react-icons/md'
import {MdDesignServices} from 'react-icons/md'

function About() {
    return (
        <div>
            <section id="about">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
    
                <div className="container about-container">
                    <div className="about-me">
                        <div className="about-me-img">
                            <img src={AboutMe} alt=""/>
                        </div>
                    </div>
    
                    <div className="about-content">
                        <div className="about-cards">
                            <div className="about-card-item">
                                <MdDeveloperMode className='about-icon'/>
                                <h3>Frontend Developer</h3>
                            </div>
                            <div className="about-card-item">
                                <MdDesignServices className='about-icon'/>
                                <h3>UI/UX Designer</h3>
                            </div>
                        </div>
    
                        <p>I am a dedicated and hard-working frontend developer. 
                        With a strong foundation in frontend technologies such as <span className="html">HTML</span>, <span className="css">CSS</span> , and <span className="js">Javascript</span>, along 
                        with expertise in frameworks like <span className="react">React</span>, I strive to create visually appealing and user-friendly 
                        websites. I am well-versed in web standards, including responsive design, web performance 
                        optimization, and writing maintainable and scalable code. 
                        
                        <span className="next-p">
                        As a motivated and detail-oriented 
                        self-starter, I approach every task with efficiency and a keen eye for quality. 
                        Whether collaborating within a team or working independently, I am committed to delivering 
                        exceptional results within deadlines and consistently exceeding expectations. My goal is to 
                        continuously expand my skillset and experiences, allowing me to provide the best possible solutions 
                        for clients.
                        </span></p>
                        
                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </section>
        </div>
      )
}

export default About