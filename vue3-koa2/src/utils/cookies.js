/*
 * @Description: cookies封装
 * @Author: wander
 * @Date: 2022-05-05 12:08:15
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 12:16:59
 */
import Keys from "@/constant/key";
import Cookies from "js-cookie";

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus) => Cookies.set(Keys.sidebarStatusKey, sidebarStatus)

export const getLanguage = () => Cookies.get(Keys.languageKey)
export const setLanguage = (language) => Cookies.set(Keys.languageKey, language)

export const getSize = () => Cookies.get(Keys.sizeKey)
export const setSize = (size) => Cookies.set(Keys.sizeKey, size)

export const getToken = () => Cookies.get(Keys.tokenKey)
export const setToken = (token) => Cookies.set(Keys.tokenKey, token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)
