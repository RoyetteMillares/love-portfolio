import React, { useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { images } from '../../constants'


const Navbar = () => {
    const [Toggle, setToggle] = useState(false);



    return (
        <nav className='app-navbar'>
            <div className='app-navbar-logo'>
                <img src={images.logo} alt="logo" height="70px " />
            </div>
            <ul className='app-navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={`link-${item}`} className="flex p-text">
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app-navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {Toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />

                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item} className="flex p-text">

                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar