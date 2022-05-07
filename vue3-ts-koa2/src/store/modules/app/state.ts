/*
 * @Description: app state
 * @Author: wander
 * @Date: 2022-05-06 01:17:09
 * @LastEditors: wander
 * @LastEditTime: 2022-05-06 11:16:52
 */
import { getSidebarStatus, getSize } from '@/utils/cookies'
import { getLocale } from '@/locales'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface AppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
}

export const state: AppState = {
  device: DeviceType.Desktop,
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  language: getLocale(),
  size: getSize() || 'medium'
}
