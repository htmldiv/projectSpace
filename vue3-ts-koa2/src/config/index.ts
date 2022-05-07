/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:20:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:40:53
 */

// 默认配置
import {  netConfig, settingConfig, themeConfig } from './default'
// 自定义配置
import customConfig from './customConfig'

// 导出配置（自定义配置优先级高）
export default Object.assign({}, netConfig, settingConfig, themeConfig, customConfig)
