/*
 * @Description: i18n国际化
 * @Author: wander
 * @Date: 2022-05-06 01:18:59
 * @LastEditors: wander
 * @LastEditTime: 2022-05-06 11:22:07
 */

import i18n from '@/locales'
export default function loadComponent(app: any) {
  app.use(i18n)
}
