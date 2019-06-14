import React from 'react';

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

export default class Comentarios extends React.Component {
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