import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Previsao from './components/Previsão'
// import * as serviceWorker from './serviceWorker';




const dados = [
    {
        id: 0,
        link: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
        name: "Mellina",
        comentario: "AMEI ESSE VIDEO KERO +++",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 1,
        link: "https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif",
        name: "Joana",
        comentario: "Meh aChei NEEEM MAis Oi mEnOsx",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

class Card extends React.Component {
    render() {
        return dados.map(dado => {
            return (
                <div key={dado.id} className="comentario">
                    <img className="comentario__perfil" src={dado.link} alt="imagem de gatinho"></img>
                    <div>
                        <h1 className="comentario__nome">{dado.name}</h1>
                        <p className="comentario__subtitulo">{dado.comentario}</p>
                        <hr />
                        <p>{dado.desc}</p>
                    </div>
                </div>
            )
        })
    }
}


class Esconde extends React.Component {
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
                <div>{this.state.mudar ? < Card /> : ''}</div>
            </div>
        )
    }
}


const datas = [
    {
        data: '31/05/2019',
        resumo: 'Ensolarado',
        imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
        temperatura: {
            max: 31,
            min: 20
        }
    },
    {
        data: '01/06/2019',
        resumo: 'Nublado',
        imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
        temperatura: {
            max: 25,
            min: 18
        }
    }
]

class Clima extends React.Component {
    render() {
        return (
            <div>
                <div className="previsao-container">
                    {datas.map((dia) => (
                        <Previsao
                            key={dia.data}
                            data={dia.data}
                            resumo={dia.resumo}
                            imagem={dia.imagem}
                            temperatura={dia.temperatura}
                        />

                    ))}
                </div>
            </div>
        )
    }
}

class Btn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    
    add = () => {
        this.setState((state) => {
            return state.count++
        })
        document.getElementById('root').style.fontSize = `${this.state.count}px`
    }

    sub = () => {
        this.setState((state) => {
            return state.count--
        })
        document.getElementById('root').style.fontSize = `${this.state.count}px`
    }

    render() {
        return (
            <div>
                <div>
                    <div className="btn-container">
                        <button className="btn" onClick={this.add}>+ 1</button>
                        <button className="btn" onClick={this.sub}>- 1</button>
                    </div>
                </div>
            </div>

        )

    }
}

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Clima />
                <Btn />
                <Esconde />
            </div>

        )

    }
}


ReactDOM.render(<Main />, document.getElementById('root'));