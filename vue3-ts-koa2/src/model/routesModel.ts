/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:55:21
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:43:00
 */

export interface Meta {
  hidden: boolean
}

export interface Children {
  path: string
  component: string
}

export interface Route {
  path: string
  component: string
  meta: Meta
  children: Children[]
}

export interface Routes {
  routes: Route[]
}
