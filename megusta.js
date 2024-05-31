document.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.querySelector('#like-button');
    const likeCountElement = document.querySelector('#like-count');

    likeButton.addEventListener('click', () => {
        // Obtiene el número actual de "me gusta" del elemento de texto
        let likeCount = parseInt(likeCountElement.textContent);
        
        // Incrementa el número de "me gusta"
        likeCount++;
        
        // Actualiza el texto del elemento con el nuevo número de "me gusta"
        likeCountElement.textContent = `${likeCount} like(s)`;
    });
});

