import React from 'react'
import logo from '../../images/RocketChat.png'
import './nav.css'
import Menu from './Menu/Menu'

export default function Nav(props) {
    return (
        <nav className="navbar">
            <div>
                <img className="navbar-logo" src={logo} alt="Logotipo de RocketChat"></img>
            </div>
            <Menu/>
        </nav>
    )
}