import React from "react"
import { functionTypeAnnotation, validate } from "@babel/types";
import FormInput from '../../components/FormInput/FormInput'
import Validate from '../../functions/validate'
import FormSubmit from '../../components/FormSubmit/FormSubmit'

export default class PessoaFisica extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formIsValid: false,
            formControls: {
                email: {
                    type: 'text',
                    value: '',
                    placeholder: "Seu email",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                        isEmail: false
                    },
                    error: "Digite um email válido"
                },
                name: {
                    type: 'text',
                    value: '',
                    placeholder: "Qual o seu nome?",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                    },
                    error: "Digite um nome válido"
                },
                password: {
                    type: 'password',
                    value: '',
                    placeholder: "Sua senha",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 8,
                        isRequired: true,
                        isPassword: false,
                    },
                    error: "Senha inválida! Sua senha precisa ter 8 caracteres, conter pelo menos um número, ter letras maiúsculas e minúsculas e caracteres especiais"

                },

                birthdate: {
                    type: 'text',
                    value: '',
                    placeholder: "Seu aniversário (dd/mm/aaaa)",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 10,
                        isRequired: true,
                        isDate: false,
                    },
                    error: "Digite uma data inválida"
                },
                cpf: {
                    type: 'text',
                    value: '',
                    placeholder: "Seu CPF (apenas números)",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 11,
                        isRequired: true,
                        isCPF: false,
                    },
                    error: "Digite um CPF válido"
                }
            }

        }


    }

    changeHandler = event => {
        const name = event.target.name
        const value = event.target.value

        const updatedControls = {
            ...this.state.formControls
        }

        const updateFormElement = {
            ...updatedControls[name]
        }

        updateFormElement.value = value;
        updateFormElement.touched = true;
        updateFormElement.valid = Validate(value, updateFormElement.validationRules)

        updatedControls[name] = updateFormElement

        let formIsValid = true;
        for (let inputName in updatedControls) {
            formIsValid = updatedControls[inputName].valid && formIsValid
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid,
            
        })

    }

    formSubmitHandler = (e) => {
        console.log(this.state)
        e.preventDefault()

    }

    render() {

        return (
            <div className="pagina">
                <h2>Cadastro Pessoa Física</h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <FormInput name="name"
                        placeholder={this.state.formControls.name.placeholder}
                        value={this.state.formControls.name.value}
                        onChange={this.changeHandler}></FormInput>
                    <FormInput name="email"
                        placeholder={this.state.formControls.email.placeholder}
                        value={this.state.formControls.email.value}
                        onChange={this.changeHandler} touched={this.state.formControls.email.touched}
                        valid={this.state.formControls.email.valid} error={this.state.formControls.email.error}></FormInput>

                    <FormInput name="cpf"
                        placeholder={this.state.formControls.cpf.placeholder}
                        value={this.state.formControls.cpf.value}
                        onChange={this.changeHandler} touched={this.state.formControls.cpf.touched}
                        valid={this.state.formControls.cpf.valid} error={this.state.formControls.cpf.error}></FormInput>

                    <FormInput name="birthdate"
                        placeholder={this.state.formControls.birthdate.placeholder}
                        value={this.state.formControls.birthdate.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.birthdate.touched}
                        valid={this.state.formControls.birthdate.valid} error={this.state.formControls.birthdate.error}></FormInput>

                    <FormInput name="password"
                        type={this.state.formControls.password.type}
                        placeholder={this.state.formControls.password.placeholder}
                        value={this.state.formControls.password.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.password.touched}
                        valid={this.state.formControls.password.valid} error={this.state.formControls.password.error}></FormInput>
                    <FormSubmit formIsValid={this.state.formIsValid} disabled={!this.state.formIsValid} onClick={this.formSubmitHandler}></FormSubmit>
                    
                </form>
            </div>
        )
    }
}


// handleName = (e) => {
//     let inputName = e.target
//     let warningMessage = document.getElementById('error-name')
//     this.setState({
//         name: inputName.value

//     })
//     if (inputName.value.length < 10) {
//         warningMessage.style.display = "block"
//         warningMessage.innerHTML = "Digite pelo menos 10 caracteres"
//         warningMessage.classList.add("grupo__erro")
//     } else {
//         warningMessage.style.display = "none"
//     }
//     if (!inputName.value) {
//         warningMessage.innerHTML = "Campo obrigatório"
//     }

// }

// handleCpf = (e) => {
//     let warningMessage = document.getElementById('error-cpf')
//     let inputCpf = e.target
//     this.setState({
//         cpf: inputCpf.value
//     })
//     const regex = /[\d]/gm
//     if (inputCpf.value.length == 11 && regex.exec(inputCpf.value) !== null) {
//         warningMessage.style.display = "none"

//     } else {
//         warningMessage.style.display = "block"
//         warningMessage.innerHTML = "Digite um CPF válido"
//         warningMessage.classList.add("grupo__erro")
//     }

//     if (!inputCpf.value) {
//         warningMessage.innerHTML = "Campo obrigatório"
//     }
// }

// handleDate = (e) => {
//     let warningMessage = document.getElementById('error-date')
//     let inputDate = e.target
//     this.setState({
//         date: inputDate.value
//     })

//     const regex = /(\d{2})?([\/])?(\d{2})?([\/])?(\d{4})/igm;
//     if (regex.exec(inputDate.value) !== null && inputDate.value.length == 10) {
//         warningMessage.style.display = "none"

//     } else {
//         warningMessage.style.display = "block"
//         warningMessage.innerHTML = "Digite uma data válida"
//         warningMessage.classList.add("grupo__erro")
//     }

//     if (!inputDate.value) {
//         warningMessage.style.display = "block"
//         warningMessage.classList.add("grupo__erro")
//         warningMessage.innerHTML = "Campo obrigatório"
//     }

// }

// handleEmail = (e) => {
//     let warningMessage = document.getElementById('error-email')
//     let inputEmail = e.target
//     this.setState({
//         email: inputEmail.value
//     })

//     const regex = /(\w+)([\@])(\w+)(.com)/m
//     if (regex.exec(inputEmail.value) !== null) {
//         warningMessage.style.display = "none"

//     } else {
//         warningMessage.style.display = "block"
//         warningMessage.innerHTML = "Digite um email válido"
//         warningMessage.classList.add("grupo__erro")
//     }

// }

// handlePassword = (e) => {
//     let warningMessage = document.getElementById('error-password')
//     let inputPassword = e.target
//     this.setState({
//         password: inputPassword.value
//     })
//     const rCharEsp = /[\.,!@?^=%&:*~+#-]/m
//     const rUpper = /[A-Z]/m
//     const rLower = /[a-z]/m
//     const rNumber = /[\d]/m
//     if (!inputPassword.value) {
//         warningMessage.style.display = "block"
//         warningMessage.classList.add("grupo__erro")
//         warningMessage.innerHTML = "Campo obrigatório"

//     } else {
//         if (rCharEsp.exec(inputPassword.value) == null) {
//             warningMessage.style.display = "block"
//             warningMessage.innerHTML = "Sua senha deve conter pelo menos um caracter especial"
//             warningMessage.classList.add("grupo__erro")
//         }
//         else if (rUpper.exec(inputPassword.value) == null) {
//             warningMessage.style.display = "block"
//             warningMessage.innerHTML = "Sua senha deve conter pelo menos uma letra maiúscula"
//             warningMessage.classList.add("grupo__erro")
//         } else if (rLower.exec(inputPassword.value) == null) {
//             warningMessage.style.display = "block"
//             warningMessage.innerHTML = "Sua senha deve conter pelo menos uma letra minúscula"
//             warningMessage.classList.add("grupo__erro")
//         } else if (rNumber.exec(inputPassword.value) == null) {
//             warningMessage.style.display = "block"
//             warningMessage.innerHTML = "Sua senha deve conter pelo menos um número"
//             warningMessage.classList.add("grupo__erro")
//         } else if (inputPassword.value.length < 8) {
//             warningMessage.style.display = "block"
//             warningMessage.innerHTML = "Sua senha deve 8 caracteres"
//             warningMessage.classList.add("grupo__erro")
//         } else {
//             warningMessage.style.display = "none"

//         }
//     }
// }

// habilitaBtn = () => {
//     if (this.state.name && this.state.cpf && this.state.date && this.state.email && this.state.password){
//         console.log('ok')
//     } 
// }