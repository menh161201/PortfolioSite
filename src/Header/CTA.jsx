import React from 'react'
import './header.css'
import CV from './Minh_Nguyen_Latest.pdf'

function CTA() {
  return (
    <div>
        <div className="cta">
            <a href={CV} className="btn" download>Download CV</a>
            <a href="/#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    </div>
  )
}

export default CTA