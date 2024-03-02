import React from 'react'
import './navbarstyle.css'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import {useState} from 'react'

const Navbar = () => {
    const[click,setClick]= useState(false)
    const handleClick =()=> setClick(!click)

    const [color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }
    };
    window.addEventListener('scroll', changeColor)
    return (
        <div className={color ? 'navbar navbar-bg' : "navbar"}>
            <Link to='/'>
                <h1>Portfolio</h1>
            </Link>
            <ul className= {click ? "nav-menu active"
            : "nav-menu"}>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
             {click ? (<FaTimes  size={20} style={{color:"#fff"}}/> )
            :
                <FaBarsStaggered size={20} style={{color:"#fff"}}/>}
            </div>

        </div>
    )
}

export default Navbar