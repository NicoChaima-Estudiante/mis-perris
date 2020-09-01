// con este javascript lo que hago es capturar cuando el usuario haga click en el menu para que se le muestre

// con js selecciono la lista
let lista = document.getElementById('lista');
// selecciono el boton que abrirá el menu
let boton = document.getElementById('hamburguesa');
console.log(lista);

// escucho cuando el usuario haga click sobre ese boton
// si se hace click sobre el, le cambio la propiedad display de css a block para que se muestre si está oculta
// si se está mostrando y el usuario vuelve a hacer click, entonces se oculta
boton.addEventListener('click', () => {
    // lista.style.display = (lista.style.display === 'none' || lista.style.display === '') ? 'block' : 'none';
    if (lista.style.display === 'none' || lista.style.display === '') /* si está oculta */
        lista.style.display = 'block';
    else /* si se está mostrando*/
        lista.style.display = 'none';
})