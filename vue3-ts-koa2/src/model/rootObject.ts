/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:55:21
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:42:52
 */


// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//         "accessToken": "admin-token"
//     }
// }

export interface RootObject<T>{
  code: number
  msg: string
  data: T
}
