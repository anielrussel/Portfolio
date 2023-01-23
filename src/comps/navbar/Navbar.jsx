import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    const location = useLocation();
  return (
    <div className='navbar-fixed'>
        <div className="navbar">
            <div className="navbar-logo">
                <motion.h1
                    initial={{x: 200, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'tween', duration: .8}}
                ><span>A</span>NIEL</motion.h1>
            </div>
            <motion.div className="navbar-links"
                initial={{x: 200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'tween', duration: .8, delay: .2}}
            >
                <Link to='/' className={location.pathname === '/' ? 'actives' : ''}><a><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp; Home</a></Link>
                <Link to='/about' className={location.pathname === '/about' ? 'actives' : ''}><a><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp; About</a></Link>
                <Link to='/projects' className={location.pathname === '/projects' ? 'actives' : ''}><a><FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp; Projects</a></Link>
                <Link to='/contact' className={location.pathname === '/contact' ? 'actives' : ''}><a><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp; Contact</a></Link>
            </motion.div>
            <motion.div className="navbar-button"
                initial={{x: 200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'tween', duration: .8, delay: .3}}
            >
                <a href='/ANIEL_RESUME.pdf' download className='hvr-ripple-out'>DOWNLOAD CV</a>
            </motion.div>
            <motion.div className="navbar-footer"
                initial={{x: 200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'tween', duration: .8, delay: .3}}
            >
                <p>&copy; 2023 ANIEL</p>
                <p>Created by: RM.Aniel</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar