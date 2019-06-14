import React from 'react';
import Comentario from './Comentario'

export default class BtnMostra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mudar: false,
            title: "Mostrar comentários"
        }
    }

    mudarEstado = () => {
        this.setState((estadoAnterior) => {
            return {
                mudar: !estadoAnterior.mudar

            }
        })

    }

    render() {
        return (
            <div className="btn-change-container">
                <button className="btn-change" onClick={this.mudarEstado}>{this.state.mudar ? "Fechar" : this.state.title}</button>
                <div>{this.state.mudar ? < Comentario /> : ''}</div>
            </div>
        )
    }
}
