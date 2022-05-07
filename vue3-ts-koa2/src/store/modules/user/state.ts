/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:52:04
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:49:06
 */

import { getToken } from '@/utils/cookies'

export interface UserState{
    token: string
    name: string
    avatar: string
    introduction: string
    roles: string[]
    email: string
}

export const state: UserState = {
  token: getToken() || '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: ''
}
