const cep = document.getElementById('cep');
const form = document.getElementById('form-container');
const message = document.getElementById('cep-error');
function showResult(response) {
    let address = `
    <div class="input-group">
        <label for="cep">CEP</label>
        <input name="cep" id="cep" type="text" value="${response.cep}"/>
        <p id="cep-error"></p>
    </div>
    <div class="input-group">
        <label for="logradouro">Endereço</label>
        <input name="logradouro" id="logradouro" type="text"  value="${response.logradouro}" />
    </div>

    <div class="input-group">
        <label for="bairro">Endereço</label>
        <input name="bairro" id="bairro" type="text"  value="${response.bairro}" />
    </div>

    <div class="input-group">
        <label for="bairro">Endereço</label>
        <input name="bairro" id="bairro" type="text"  value="${response.localidade}" />
    </div>

    <div class="input-group">
        <label for="estado">Endereço</label>
        <input name="estado" id="estado" type="text"   value="${response.uf}" />
    </div>
    `
    form.innerHTML = address
    cep.innerHTML.value = response.cep
}

const getData = (cep) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", `https://viacep.com.br/ws/${cep}/json/`);
        request.onload = function () {
            if (request.status == 200) {
                const response = JSON.parse(request.responseText);
                resolve(response);
    
            } 
        };
        request.onerror = function () {
            reject('CEP inválido')
        }
        request.send();
    });
    
}

cep.addEventListener('blur', function () {
    if (cep.value) {
        getData(cep.value).then(apiResponse => {
            showResult(apiResponse)
            cep.classList.remove('error')
            cep.innerHTML = ""
        })
        .catch(erro => {
            cep.classList.add('error');
            message.innerHTML = erro;
    
        })
    } else {
        cep.classList.add('error')
        message.innerHTML = "Campo obrigatório"
    }
    
    
})