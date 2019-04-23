
// let user = parseInt(prompt("Digite a senha: "));
// let senha = 666;

// console.log(user==senha)
// console.log(typeof(senha))
// console.log(typeof(user))
    
// do {
//     if(user == senha){
//         alert("Senha correta!");
       
//     } else {
//         alert("Senha incorreta!");
//         user = parseInt(prompt("Digite a senha: "));
//         if(user == senha){alert("Login efetuado com sucesso!")}
//     }
// } while(user !== senha);

let user = '';
   
do {
    user = parseInt(prompt("Digite a senha: "));
    if(user == 666){
        alert("Senha correta!");
       
    } else {
        alert("Senha incorreta!");
        // user = parseInt(prompt("Digite a senha: "));
        // if(user == senha){alert("Login efetuado com sucesso!")}
    }
} while(user !== 666);





