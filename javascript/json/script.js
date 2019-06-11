const authorsArray = JSON.stringify(autores);
const authorsArrayJs = JSON.parse(authorsArray);

const insertRows = row => {
    let table = ""
    row.forEach(livro => {
        table += `
            <tr>
                <td>${livro.livro}</td>
                <td>${livro.autor}</td>
                <td>${livro.genero}</td>
                
            </tr>
        `
    });
    return table
}

const sortLivros = document.getElementById('sortLivro');
const sortAuthor = document.getElementById('sortAutor');
const sortGen = document.getElementById('sortGenero');

function sortItems(array, attr) { 
    return array.sort((a, b) => {
        if (a[attr].toLowerCase() < b[attr].toLowerCase()) {
            return -1
        } if (a[attr].toLowerCase() > b[attr].toLowerCase()) {
            return 1
        }
        return 0
    })

}
sortLivros.addEventListener('click', (e) => {
    
    document.getElementById('table-section').innerHTML = insertRows(sortItems(authorsArrayJs.livros, "livro"))
})

sortAuthor.addEventListener('click', (e) => {
    
    document.getElementById('table-section').innerHTML = insertRows(sortItems(authorsArrayJs.livros, "autor"))
})

sortGen.addEventListener('click', (e) => {
    
    document.getElementById('table-section').innerHTML = insertRows(sortItems(authorsArrayJs.livros, "genero"))
})

document.getElementById('table-section').innerHTML += insertRows(authorsArrayJs.livros)
