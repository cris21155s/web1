document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const yesButton = document.getElementById('yesButton');

    // Función para mover el botón
    function moveButton() {
        // Obtenemos el tamaño INTERNO del contenedor (descontando el padding)
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const noButtonRect = noButton.getBoundingClientRect();
        
        // Calculamos la posición máxima para que no se salga
        const maxX = containerWidth - noButtonRect.width;
        const maxY = containerHeight - noButtonRect.height;

        // Generamos posiciones aleatorias dentro de los límites
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        // Aplicamos la nueva posición
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    // --- EVENTOS PARA MOVER EL BOTÓN ---

    // 1. Para computadoras (pasar el ratón)
    noButton.addEventListener('mouseover', moveButton);
    
    // 2. Para celulares (tocar)
    noButton.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevenimos el "click fantasma" y el scroll
        moveButton();
    });

    // Moverlo una vez al cargar la página a una posición inicial
    moveButton();

    // --- EVENTO PARA EL BOTÓN 'SÍ' ---
    yesButton.addEventListener('click', () => {
        // Ocultamos los botones
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        
        // Cambiamos el mensaje
        const h1 = document.querySelector('h1');
        h1.innerText = '¡Sabía que dirías que sí! 😊❤️';

        // Opcional: Cambiamos la imagen a una de celebración (si tuvieras una)
        // const img = document.querySelector('.cat-image');
        // img.src = 'gato_feliz.png'; 
    });
});
