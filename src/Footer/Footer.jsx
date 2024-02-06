import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer id="footer">
          <a href="" className="footer-logo">MINH NGUYEN</a>

          <ul className="permalinks">
              <li><a href="/#">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/#contact">Contact</a></li>
          </ul>

          <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100066819163512" target={"blank"}><BsFacebook/></a>
              <a href="https://www.instagram.com/menh1612/?next=%2F" target={"blank"}><FaInstagramSquare/></a>
          </div>

          <div className="footer-copyright">
              <small>&copy; Minh Nguyen. All rights reserved</small>
              <small>
                Latest Update: 7/9/2023
              </small>
          </div>
      </footer>
    </div>
  )
}

export default Footer