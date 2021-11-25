import api from './apiCms'

// Fazendo Requisições para o CMS

// Dados dos Serviços
const getServices = async () => {
    const dataServices = await api.get('/servicos', {})
    return dataServices.data
}

// Dados Footer e Navbar
const getIndexInfo = async () => {
    const dataInfo = await api.get('/speedylars', {})
    return dataInfo.data
}

// Dados da Home
const getHomeInfo = async () => {
    const dataHome = await api.get('/home-pages', {})
    return dataHome.data
}

export default {
    getServices,
    getIndexInfo,
    getHomeInfo
}