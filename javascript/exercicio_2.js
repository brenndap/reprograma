// Crie uma função com dois argumentos, que retorna a subtração deles.
function sub(n1, n2) {
    return n1 - n2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "5" ao resultado retornado da função.

function somaSub(n1, n2) {
    var num = sub(n1, n2);
    return num + 5;
}

// Qual o valor atualizado dessa variável?
// depende do valor dado nos args

// Declare uma nova variável, sem valor.
var x;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/
function nome (x){
    var string = "O novo valor da minha variável agora é "
    return string + x
}

// Invoque a função criada acima.
nome(10)

// Qual o retorno da função? (Use comentários de bloco).
/*O novo valor da minha variável agora é
10*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/

function mult(arg1, arg2, arg3) {
    if (arg1 == undefined || arg2 == undefined || arg3 == undefined) {
        return "Preencha todos os valores corretamente";
    } else {
        return (arg1 * arg2 * arg3) + 2;
    }
}



// Invoque a função criada acima, passando só dois números como argumento.
mult(3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
mult(3, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
29

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/

function argumentos(arg1, arg2, arg3) {
   if (arg1 && ! arg2 && ! arg3) {
       return arg1;
   } 
   else if (arg1 && arg2 && !arg3) {
       return arg1 + arg2;
   }
   else if (arg1 && arg2 && arg3) {
       return (arg1 + arg2)/arg3;
   }
   else if (! arg1 && ! arg2 && ! arg3) {
       return false;
   }
   else {
       return null;
   }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
