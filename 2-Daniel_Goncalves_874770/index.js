const axios = require('axios');

const API_KEY = '6c073b72496b606e0689105734c4dd4c'; // Substitua pela sua chave de API
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchPopularSeries() {
    try {
        const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`);
        return response.data.results;
    } catch (error) {
        console.error('Erro ao buscar séries populares:', error);
    }
}

// Chame a função e use os dados
fetchPopularSeries().then(series => {
    console.log(series); // Aqui você pode manipular os dados como quiser
});