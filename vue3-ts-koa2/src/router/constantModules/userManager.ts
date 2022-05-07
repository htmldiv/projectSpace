/*
 * @Description: 用户管理相关路由管理
 * @Author: wander
 * @Date: 2022-05-06 01:17:40
 * @LastEditors: wander
 * @LastEditTime: 2022-05-06 11:21:22
 */

import { RouteRecordRaw } from 'vue-router'
const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "userManager" */'@/views/user-manager/login/Index.vue')
  }
]
export default UserManagerRouter
