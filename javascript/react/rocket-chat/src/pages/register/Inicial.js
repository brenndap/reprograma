import React from 'react'
import Astronauta from '../../images/astronaut.png'
import Globe from '../../images/globe.png'
import { Link } from "react-router-dom"

export default function Inicial(props) {
    return (
        <div className="pagina">
            <h1>Escolha qual tipo de cadastro:</h1>
            <div className="pagina__botao">
                <button className="botao-icone">
                    <Link to='/cadastro/pessoa-fisica'><img className="botao-imagem" src={Astronauta}></img></Link>
                    <p>Pessoa física</p>
                </button>
                <button className="botao-icone">
                    <Link to='/cadastro/pessoa-juridica'><img className="botao-imagem" src={Globe}></img></Link>
                    <p>Pessoa jurídica</p>
                </button>

            </div>
        </div>
    )
}