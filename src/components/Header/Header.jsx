import React from 'react'
import logo from "../../images/logo.webp"
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
        <img className="logo" src={logo}/>
        <nav>
            <ul>
                <Link>Accueil</Link>
                <Link>A Propos</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header