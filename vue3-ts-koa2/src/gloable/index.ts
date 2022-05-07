/*
 * @Description: 引入element-plus icon  参考文章:https://juejin.cn/post/7040446664519188510
 * @Author: wander
 * @Date: 2022-05-07 16:42:53
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 17:47:00
 */
import { App } from 'vue'
import registerElementIcons from './regiter-element-icon'

//app.use 默认执行其中的函数并且传入app对象
export function globalRegister(app: App): void {
  app.use(registerElementIcons)
}

