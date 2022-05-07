/*
 * @Description: 加载插件文件
 * @Author: wander
 * @Date: 2022-05-05 13:55:47
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 14:01:54
 */
import { createApp } from "vue";

export function loadAllPlugins(app) {
  const files = require.context('.', true, /\.js$/)
  files.keys().forEach(element => {
    if(typeof files(element).default === 'function') {
      if(element !== './index.js') files(element).default(app)
    }
    
  });
}