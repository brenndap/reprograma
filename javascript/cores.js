/*
Usando a estrutura SWITH, crie uma função que transforme quatro cores passadas por parâmetro em formato 'string', para os equivalentes hexadecimais.
Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/

function cores(cor){
    
    switch (cor) {
        case "vermelho":
            console.log("#ff0000");
            break;
        case "azul":
            console.log("#0000ff");
            break;
        case "preto":
            console.log("#000000");
            break;
        case "branco":
            console.log("#ffffff");    
        break;
        default:
            console.log("cor inválida");
        
  
    }
}