/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:20:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:39:52
 */


import { ContentType, Device } from '@/constant/headers'
import { InfoShowType } from '@/constant/network'
import settings from "./setting.config";
interface Headers{
    token: string
    contentType: string
    version: string
    device: Device
}

const _header: Headers = {
  token: '',
  contentType: ContentType.JSON,
  version: settings.version ?? '1.0',
  device: Device.PC
}

export interface NetworkConfig{
    host?: string
    timeout?: number
    loading?: false
    errorShowType?: InfoShowType
    header?: {}
}

const networkConfig: NetworkConfig = {
  host: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  loading: false,
  errorShowType: InfoShowType.LOG,
  header: _header
}

export default networkConfig
