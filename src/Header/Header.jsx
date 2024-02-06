import React from 'react'
import './header.css'
import Me from "./front-img.jpg";
import CTA from './CTA'
import SocialHeader from './SocialHeader';


function Header() {
  return (
    <div>
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Minh Nguyen</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />

                <div className="me">
                    <img src={Me} alt=""/>
                </div>

                <a href="#about" className="scroll-down">Scroll Down <span>&rarr;</span></a>
                <SocialHeader />
            </div>
        </header>
    </div>  
  )
}

export default Header