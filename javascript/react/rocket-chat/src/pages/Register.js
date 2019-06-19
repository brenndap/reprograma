import React from 'react'
import './register.css'
import PessoaFisica from './register/PessoaFisica'
import PessoaJuridica from './register/PessoaJuridica'
import Inicial from './register/Inicial'
import { Route, Switch } from 'react-router-dom'

export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Switch>
                <div className="cadastro">
                    <Route path='/cadastro' exact component={Inicial}></Route>
                    <Route path="/cadastro/pessoa-fisica" component={PessoaFisica}></Route>
                    <Route path="/cadastro/pessoa-juridica" component={PessoaJuridica}></Route>
                   
                </div>
            </Switch>

        )
    }
}

