document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    noButton.addEventListener('mouseover', () => {
        // Obtenemos las dimensiones del contenedor y del botón
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // Calculamos un rango de movimiento dentro del contenedor
        // Aseguramos que el botón no se salga del contenedor
        const maxX = containerRect.width - noButtonRect.width - 20; // 20px de margen
        const maxY = containerRect.height - noButtonRect.height - 20; // 20px de margen

        // Generamos nuevas posiciones aleatorias
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Aplicamos la transformación. Usamos 'absolute' y 'left/top' para mayor control
        // El 'container' debe tener 'position: relative' para esto
        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    // Opcional: Si quieres que el botón "Sí" haga algo (por ejemplo, una alerta)
    const yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', () => {
        alert('¡Sabía que dirías que sí! 😊');
        // Puedes redirigir a otra página o mostrar un mensaje diferente aquí
    });
});