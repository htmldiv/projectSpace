/*
 * @Description: 加载插件文件
 * @Author: wander
 * @Date: 2022-05-06 01:18:59
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:43:21
 */

import { createApp } from 'vue'

/**
 * @description 加载所有 Plugins
 * @param  {ReturnType<typeofcreateApp>} app 整个应用的实例
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context('.', true, /\.ts$/)
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app)
    }
  })
}
