window.addEventListener('DOMContentLoaded', function() {
    const user = document.getElementById('input');
    const add = document.getElementById('add');
    const lista = document.getElementById('lista');    
    
    add.addEventListener('click', function() {
        const item = document.createElement('ul');
        item.innerHTML += user.value
        lista.appendChild(item)
    });
});

