function primo(numero) {
    
    if(numero != 1){
      for (var contador = 2; contador < numero; contador++)
        if (numero % contador == 0) { 
             return false;
        } 
        return numero !== 1;  
    }
    else{
        return true;
    }
}

