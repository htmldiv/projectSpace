/*
 * @Description: 路由配置
 * @Author: wander
 * @Date: 2022-05-05 11:14:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 16:42:58
 */

import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'

/**
 * require.context 用法
 * 
 * require.context(directory,useSubdirectories,regExp)
 * directory:表示检索的目录
 * useSubdirectories：表示是否检索子文件夹
 * regExp:匹配文件的正则表达式,一般是文件名
 * 例如 require.context("@/views/components",false,/.vue$/)
 * 
 * require.context() 返回的是一个函数，这个函数有3个属性
 * 1.resolve {Function} -接受一个参数request,request为文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
 * 2.keys {Function} -返回匹配成功模块的名字组成的数组
 * 3.id {String} -执行环境的id,返回的是一个字符串
 * 
 */
const constantFiles = require.context('./constantModules', true, /\.js$/)
let constantModules = []
constantFiles.keys().forEach(key => {
  if(key === '/index.js') return
  constantModules = constantModules.concat(constantFiles(key).default)
  
});

const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules = []
asyncFiles.keys().forEach((key) => {
  if (key === './index.js') return
  permissionModules = permissionModules.concat(asyncFiles(key).default)
})

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  },
  ...constantModules
]

export const asyncRoutes = [
  ...permissionModules
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = router;
  router.matcher = newRouter.matcher // reset router
}

export default router