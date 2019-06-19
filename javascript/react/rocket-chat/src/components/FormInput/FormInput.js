import React from 'react';


const FormInput = (props) => {

    let errorMessage = props.error;
    let formError = 'grupo__erro'
    if (props.touched && !props.valid) {
        formError = 'mostra_erro'
    }   if (props.touched && !props.valid && props.value == "") {
        errorMessage = 'Campo obrigatório'
    }
    return (
        <div>

            <input type="text" className="campo" {...props} />
            <p className={formError}>{errorMessage}</p>

        </div>
    );
}

export default FormInput; 