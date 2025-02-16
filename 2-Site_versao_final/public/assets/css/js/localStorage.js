// localStorage.js

// Função para salvar os favoritos
function salvarFavoritos(favoritos) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Função para carregar os favoritos
function carregarFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}
