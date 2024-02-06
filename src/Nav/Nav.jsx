import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import {GoFileSubmodule} from 'react-icons/go'

function Nav() {

  const [activeNav, setActiveNav] = React.useState("#");



  return (
    <div>
        <nav>
            <a href="/#" ><FaHome/></a>
            <a href="/#about"><FaUserAlt/></a>
            <a href="/#experience"><FaBook/></a>
            <a href="/#portfolio"><GoFileSubmodule/></a>
            <a href="/#contact"><AiFillMessage/></a>
        </nav>
    </div>
  )
}

export default Nav