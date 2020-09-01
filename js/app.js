let lista = document.getElementById('lista');
let boton = document.getElementById('hamburguesa');
console.log(lista);
boton.addEventListener('click', () => {
    lista.style.display = (lista.style.display === 'none' || lista.style.display === '') ? 'block' : 'none';
})