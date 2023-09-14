import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../pages/Home.vue'

export const router = createRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
    ],
    history: createMemoryHistory()
})