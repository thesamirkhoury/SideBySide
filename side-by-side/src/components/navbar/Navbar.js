import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {FaInstagramSquare} from 'react-icons/fa';
import {IoLogoFacebook} from 'react-icons/io';
import {ReactComponent as BrandIcon} from '../../assests/Logo.svg'

function Navbar() {
  return (
    <nav style={{width:'100vw',background:'white',padding:'10px 0px'}}>
        <div className='div-parent'>
           <div className='div-child'>
            <span>
              <FaInstagramSquare style={{width:'20px',height:'20px'}}/>
              <IoLogoFacebook style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
            </span>
            
            <span>
          
          <ul>
            <a href="http://katef.org.il" _target="_blank">כתף לכתף</a>
            <li><Link to="/about">אודותינו</Link></li>
            <li><Link to="/blog">בלוג</Link></li>
            <li><Link to="/update">עדכונים</Link></li>
            <li><Link to="/">בית</Link></li>
          </ul>
            </span>
           </div>
            <span>
            <BrandIcon/>
            </span>
        </div>
    </nav>
  )
}

export default Navbar