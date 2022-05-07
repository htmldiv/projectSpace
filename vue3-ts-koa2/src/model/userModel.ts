/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 01:55:21
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:43:05
 */


// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//         "id": 0,
//         "username": "admin",
//         "password": "any",
//         "name": "Super Admin",
//         "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
//         "introduction": "I am a super administrator",
//         "email": "admin@test.com",
//         "phone": "1234567890",
//         "roles": [
//             "admin"
//         ]
//     }
// }

export interface UserInfoModel {
  id: number
  username: string
  password: string
  name: string
  avatar: string
  introduction: string
  email: string
  phone: string
  roles: string[]
}

export interface Users {
  items: any
}
