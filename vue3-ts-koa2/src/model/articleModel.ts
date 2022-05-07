/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:55:21
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:42:34
 */

export interface ArticleModel {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}
