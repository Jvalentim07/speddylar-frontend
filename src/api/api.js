const axios = require('axios');

// Criando API pro Backend

const api = axios.create({
    baseURL: 'https://strapi-cms-speddylar.herokuapp.com',
})

export default api