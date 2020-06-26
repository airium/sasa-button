import Vue from 'vue'
import VueRouter from 'vue-router'
import MainUI from '../components/Main.vue'
import PekoLanguage from '../components/PekoLangUI.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: MainUI,
        meta: {
            title: "ささボタン Sasa-button",
        },
    },
    {
        path: '/pekolanguage',
        component: PekoLanguage,
        meta: {
            title: "Peko语生成器",
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router