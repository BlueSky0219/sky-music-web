import Vue from 'vue'
import VueRouter from 'vue-router'

import WebRoutes from './web-routes'
import SysRoutes from './sys-routes'

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

// 将SysRoutes数组元素添加至WebRoutes内
SysRoutes.forEach((item) => {
    WebRoutes.push(item)
})
export default new VueRouter({
    mode: 'history', // 去掉url中的#
    scrollBehavior() { // 切换路由使滚动条位置重置
        return {y: 0}
    },
    routes: WebRoutes, // 路由
})

