import axios from "axios";


//https://api.themoviedb.org/3/


//movie/now_playing?api_key=c883a036bd5a376212d3c89a61ac1efd&language=pt-BR&page=1

export const key = 'c883a036bd5a376212d3c89a61ac1efd'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;