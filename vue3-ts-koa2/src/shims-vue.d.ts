/*
 * @Description: ts类型声明
 * @Author: wander
 * @Date: 2022-05-06 00:26:06
 * @LastEditors: wander
 * @LastEditTime: 2022-05-06 02:57:22
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.gif' {
  export const gif: any
}

declare module 'particles.vue3';

// TODO: remove this part after vue-count-to has its typescript file
declare module 'vue-count-to'
// TODO: remove this part after vue-image-crop-upload has its typescript file
declare module 'vue-image-crop-upload'
