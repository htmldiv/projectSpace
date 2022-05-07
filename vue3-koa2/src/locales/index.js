/*
 * @Description: 国际化
 * @Author: wander
 * @Date: 2022-05-05 11:44:45
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 13:47:51
 */
import { createI18n } from "vue-i18n";  // 仅从运行时导入

import { getLanguage } from "@/utils/cookies";

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// user defined lang
import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if(cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for(const local of locales) {
    if(language.indexOf(local) > -1) {
      return local
    }
  }

  // 设置默认语言
  return 'zh'
}

const i18n = createI18n({
  locale: getLanguage(),
  messages: messages
})

export default i18n