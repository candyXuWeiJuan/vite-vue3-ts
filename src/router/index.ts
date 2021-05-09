import {createRouter, createWebHashHistory,Router, RouteRecordRaw } from 'vue-router' 
import Home from '@/views/home.vue' 
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/page', name: 'page', component: () => import('@/views/page.vue') 
}]
const router:Router = createRouter({
    history: createWebHashHistory(), 
    routes 
})
export default router