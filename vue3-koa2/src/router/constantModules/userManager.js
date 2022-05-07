/*
 * @Description: 用户管理相关路由管理
 * @Author: wander
 * @Date: 2022-05-05 14:53:52
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 14:59:51
 */
// import { RouteRecordRaw } from 'vue-router'
const UserManagerRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "userManager" */'@/views/user-manager/login/index.vue')
  }
]

export default UserManagerRouter