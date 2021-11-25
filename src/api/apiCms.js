const axios = require('axios');

// Criando API pro CMS

const api = axios.create({
    baseURL: 'http://localhost:8080',
})

export default api