const validate = (value, rules) => {
    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'minLength' : isValid = isValid && minLengthValidator(value, rules[rule]); break
            case 'isRequired' : isValid = isValid && requiredValidator(value); break
            case 'isEmail' : isValid = isValid && emailValidator(value); break
            case 'isPassword': isValid = isValid && passwordValidator(value); break
            case 'isCPF' : isValid = isValid && cpfValidator(value); break
            case 'isDate' : isValid = isValid && dateValidator(value); break
            default: isValid = true;
        }
    }

    return isValid
}

const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

const requiredValidator = value => {
    return value.trim() !== '';
}

const emailValidator = value => {
    let re = /(\w+)([\@])(\w+)(.com)/m
    return re.test(String(value).toLowerCase())
}

const passwordValidator = value => {
    const re = /[\w]+[\.,!@?^=%&:*~+#-]+/
    return re.test(String(value))
}

const cpfValidator = value => {
    const re = /[\d]/gm
    return re.test(String(value))
}

const dateValidator = value => {
    const re = /(\d{2})?([\/])?(\d{2})?([\/])?(\d{4})/igm;
    return re.test(String(value))
}
export default validate;