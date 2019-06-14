import React from 'react';
import Previsao from "./Previsão"

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

export default class Clima extends React.Component {
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