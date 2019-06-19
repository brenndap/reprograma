import React from 'react';


const FormSubmit = (props) => {

    let submitClass;
    console.log(props.formIsValid)

    if (props.formIsValid) {
        submitClass = 'botao'
        
    } else {
        submitClass = 'botao--desabilitado'
    }

    return (
        <button className={submitClass} {...props}>Enviar</button>
    );
}

export default FormSubmit; 

