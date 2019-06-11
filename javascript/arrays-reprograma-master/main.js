const names = [
  "Adam", "Alex", "Aaron", "Ben", "Carl",
  "Dan", "David", "Edward", "Fred", "Frank",
  "George", "Hal", "Hank", "Ike", "John", "Jack",
  "Joe", "Larry", "Monte", "Matthew", "Mark",
  "Nathan", "Otto", "Paul", "Peter", "Roger",
  "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
]

function validation(name) {
  // valida se campo está vazio, caso não, dá um throw para ele 
  // cair no catch !
  if (name === '') throw 'O campo está vazio! Escreva um nome!'
  // valida se nome é do tipo string, senão dá um throw para ele
  // cair no catch
  if (typeof name !== "string") throw 'Tipo inválido! Tente novamente!'
}

function searchName(name) {
  names.find((input) => {
    // procura o primeiro elemento no array que é verdadeiro
    // de acordo com a operação lógica que você passar
    return name.toLowerCase() === input.toLowerCase()
  })
}

const exibirNome = nome => {
  // a variável armazena o retorno da função procuraNome
  const estaNaLista = procuraNome(nome)
  // verificar se estaNaLista é uma variável que tem algum valor ou não
  // se tiver valor, será verdadeira e entrará no bloco
  if (estaNaLista) {
    // estaNaLista verdadeira e imprime mensagem
    document.getElementById("status").innerHTML = `${estaNaLista} estava no rolê`
    // return para encerrar a função
    return
  }
  // caso estaNaLista não tiver valor, for vazia, ou undefined,
  // da um throw para cair no catch
  throw `${nome} nãããão estava no rolê`
}

document.getElementById("form-do-role").addEventListener("submit", function (event) {
  // Tira a ação padrão de submit com preventDefault
  event.preventDefault()
  // limpamos o nosso status (caso tenha alguma mensagem lá)
  document.getElementById("status").innerHTML = ""
  // pegamos o valor do campo
  const valorCampo = document.getElementById("nome").value

  // precisamos validar o valor do valorCampo, caso esteja vazio
  // ou não seja do tipo String
  // caso tudo der sucesso, imprime a mensage pro usuário
  // senão imprime o erro
  // para isso usaremos o try catch, try executa funções
  // caso dentro delas dtenha um throw, irá cair no catch
  try {
    validacao(valorCampo)
    exibirNome(valorCampo)
    console.log("sucesso")
  } catch (erro) {
    // caso deu algum problema enquanto as funções do bloco try era 
    // executado, irá cair aqui no catch e vamos imprimir o erro
    console.log("ops!")
    document.getElementById("status").innerHTML = erro
    document.getElementById("nome").classList.add("is-invalid")
  }
})