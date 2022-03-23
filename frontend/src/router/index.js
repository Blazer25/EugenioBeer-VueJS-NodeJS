import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import RecuperarSenha from '../views/RecuperarSenha.vue'
import AdmArea from '../layout/AdmArea.vue'
import AreaAdmMembers from '../views/AreaAdm/AreaAdmMembers.vue'
import AreaAdmRegisterProducts from '../views/AreaAdm/AreaAdmRegisterProducts.vue'

const routes = [{
        //ROTA HOME
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        //ROTA PÁGINA DE REGISTRO DE MEMBROS
        path: '/Registrar',
        name: 'RegisterPage',
        component: Register
    },
    {
        //ROTA PÁGINA DE RECUPERAR SENHA
        path: '/RecuperarSenha',
        name: 'RecuperarSenha',
        component: RecuperarSenha
    },
    {
        //ROTA DA ÁREA DE ADM GERAL
        path: '/AdmArea',
        name: 'AdmArea',
        component: AdmArea
    },
    {
        //ROTA DA ÁREA DE ADM MEMBROS
        path: '/AdmArea/AreaAdmMembers',
        name: 'AdmAreaMembers',
        component: AreaAdmMembers
    },
    {
        //ROTA DA ÁREA DE ADM PRODUCTS
        path: '/AdmArea/AreaAdmRegisterProducts',
        name: 'AreaAdmRegisterProducts',
        component: AreaAdmRegisterProducts
    },
    {
        //PÁGINA DE LOGIN DE MEMBROS
        path: '/Login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router