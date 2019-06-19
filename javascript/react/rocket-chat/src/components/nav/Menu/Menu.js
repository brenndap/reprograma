import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'


export default class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleMenuResponsive = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        let classOptions = "navbar-menu__opcoes"
        let classBtn = "navbar-menu__botao"
        if (this.state.open) {
            classOptions += " navbar-menu__opcoes--aberto"
            classBtn += " navbar-menu__botao--aberto"
        }
        return (
            <div className="navbar-links" >
                <a className={classBtn} onClick={this.handleMenuResponsive}>Menu</a>
                <ul className={classOptions}>
                    <li><Link to='/' className="navbar-links__ativo">Home</Link></li>
                    <li><Link to='/cadastro'className="navbar-links__ativo">Cadastro</Link></li>
                    <li><Link to='/chat'className="navbar-links__ativo" >Chat</Link></li>
                </ul>
            </div>)
    }
}

