import React from "react"

export default class PessoaJuridica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="pagina">
                <h2>Cadastro Pessoa Jurídica</h2>
                <form className="formulario">
                    <div >
                        <label>Razão social</label>
                        <input className="campo" placeholder="Razão social" type="text"></input>
                    </div>
                    <div className="form-field">
                        <label>CNPJ</label>
                        <input className="campo" placeholder="CNPJ" type="text"></input>
                    </div>
                    <div className="form-field">
                        <label>CEP</label>
                        <input className="campo" placeholder="00000-000" type="text"></input>
                    </div>
                    <div className="form-field">
                        <label>Email</label>
                        <input className="campo" placeholder="Email" type="text"></input>
                    </div>
                    <div className="form-field">
                        <label>Senha</label>
                        <input className="campo" placeholder="Senha" type="password"></input>
                    </div>
                    <input className="botao botao--desabilitado" type="submit" value="Enviar"></input>

                </form>
            </div>
        )
    }
}