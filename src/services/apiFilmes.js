import axios from 'axios';

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        'content-type':'application/json;charset=utf-8',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWJiOGMyODgxMTY1NWY3YWZiZWJkMTQ4ODk3NDg5OSIsInN1YiI6IjVmNjE0Mzc1MWJmMjY2MDAzYWRjYTJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7h2TnVGa9vGwSObuSLrfH0lt-2R3H3FkVRYhkbTtZYI'
    }
})

export default apiFilmes;