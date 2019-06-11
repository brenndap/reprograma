class Botao {
  // criamos uma classe porque precisamos criar um componente
  // de botão, pois iremos reutilizá-lo varias vezes
  // de cores e texto diferentes
  constructor(cor, tamanho, texto, icone) {
    // fazemos o construtor para definir os atributos
    // que a nossa classe terá
    this.cor = cor
    this.tamanho = tamanho
    this.texto = texto
    this.icone = icone

  }

  desenhaBotao() {
    // desenha botão é um método para inserir o botão
    // na tela quando invocado
    const novoBotaoNoDom = document.createElement('button')
    // novoBotaoNoDom agora é uma tag button vazia
    // e precisamos inserir o atributo class no html
    // para colocar nossas classes css
    novoBotaoNoDom.setAttribute("class", `${this.cor} ${this.tamanho}`)
    if (this.icone) {
      const tagIcone = document.createElement('i');
      tagIcone.setAttribute('class', this.icone)
      novoBotaoNoDom.appendChild(tagIcone)
      const text = document.createTextNode(this.texto)
      novoBotaoNoDom.appendChild(text)
    } else {
      novoBotaoNoDom.innerHTML = this.texto
    }
    // inserimos texto no html

    // inserimos botão na tela
    document.getElementById("buttons-section").appendChild(novoBotaoNoDom)
  }
}

// criamos um novo botão
const novoBotao = new Botao('verde', 'grande', 'click me!', "fab fa-adn")
// desenhamos ele na tela
novoBotao.desenhaBotao()

const botaoRoxo = new Botao('roxo', 'pequeno', 'botao roxo', 'fab fa-facebook-f')
botaoRoxo.desenhaBotao()
console.log(botaoRoxo.icone)
