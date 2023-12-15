import Vue from 'vue'
import VueRouter from 'vue-router'

import WebRoutes from './web-routes'

Vue.use(VueRouter)

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
let routerReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push(location) {
    return routerReplace.call(this, location).catch(err => err)
}

export default new VueRouter({
    mode: 'history', // 去掉url中的#
    routes: WebRoutes, // 路由
})

