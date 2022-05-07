/*
 * @Description: 自定义配置
 * @Author: wander
 * @Date: 2022-05-06 01:20:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 14:19:58
 */


import { NetworkConfig } from './default/net.config'
import { Theme } from './default/theme.config'
import { Settings } from './default/setting.config'

type CustomConfig = NetworkConfig  & Theme & Settings

const customConfig: CustomConfig = {

}

export default  customConfig
