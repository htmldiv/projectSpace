/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:15:45
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:41:27
 */


export enum Language{
     En='en',
     Zh='zh-cn',
}

export enum Environment{
    Development = 'development',
    Production = 'production'
}

export enum RouterSource{
    Frontend = 'frontend',
    Backend = 'backend'
}

export enum RouterMode{
    Hash = 'hash',
    HISTORY = 'history'
}

export enum TokenStorageName{
    LocalStorage = 'localStorage',
    SessionStorage = 'sessionStorage',
    Cookie = 'cookie'
}
