/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:07:55
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:38:53
 */

import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }

  declare module 'vue-router' {
    interface RouteMeta {
      roles?: string[]
    }
}
