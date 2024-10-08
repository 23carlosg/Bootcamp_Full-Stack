// const rutaNavBar = '../../Componentes/NavBar.html';

// document.addEventListener('DOMContentLoaded', () => {
//     cargarComponente('navbar-reutilizable', rutaNavBar);
// });

// function cargarComponente(elementId, ruta) {
//     const elemento = document.getElementById(elementId);
//     if (elemento) {
//         fetch(ruta)
//             .then(response => response.text())
//             .then(template => {
//                 elemento.innerHTML = template;
//                 console.log(template);
                
//             })
//             .catch(error => console.error('Error al cargar el navbar:', error));
//     }
// }

const rutaNavBar = '/Componentes/NavBar.html';  // Ruta del navbar
const rutaFooter = '/Componentes/Footer.html'; // Ruta del footer

document.addEventListener('DOMContentLoaded', () => {
    cargarComponente('navbar-reutilizable', rutaNavBar); // Cargar navbar
    cargarComponente('footer-reutilizable', rutaFooter); // Cargar footer
});

function cargarComponente(elementId, ruta) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        fetch(ruta)
            .then(response => response.text())
            .then(template => {
                elemento.innerHTML = template;
                console.log(`Componente ${elementId} cargado`);
            })
            .catch(error => console.error(`Error al cargar el componente ${elementId}:`, error));
    }
}