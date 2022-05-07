/*
 * @Description: i18n 国际化
 * @Author: wander
 * @Date: 2022-05-05 13:56:16
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 13:57:34
 */
import i18n from "@/locales";

export default function loadComponent(app) {
  app.use(i18n)
}