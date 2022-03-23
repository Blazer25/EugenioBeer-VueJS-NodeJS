import axios from 'axios'


const http = axios.create({
    baseURL: 'http://localhost:3000/'
})

http.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return error.response;
});

export { http }