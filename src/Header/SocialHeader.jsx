import React from 'react'
import './header.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
function SocialHeader() {
  return (
    <div>
        <div className="social-header">
            <a class="link" href="https://www.linkedin.com/in/minh-nguyen-818698256/" target={"blank"}><FaLinkedin/></a>
            <a class="git" href="https://github.com/menh161201" target={"blank"}><FaGithub/></a>
        </div>
    </div>
  )
}
export default SocialHeader