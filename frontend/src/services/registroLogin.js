import { http } from "./config";

export default {
    listar: () => {
        return http.get('/cadastrarUsuarios')
    },
    apagar: (_id) => {
        return http.delete(`/cadastrarUsuarios/${_id}`)
    },
    salvar: (data) => {
        return http.post('/cadastrarUsuarios', data)
    },
}