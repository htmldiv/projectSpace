import db from '../config/db.js' // 引入user的表结构
import { DataTypes } from 'sequelize';
const userModel = '../schema/user.js'
const DemoDb = db.Demo // 引入数据-
/***
 * 问题: 用sequelize的import方法引入表结构
 * 
 * 原方法: const User = DemoDb.import(userModel) // 用sequelize的import方法引入表结构，实例化了basicTable。
 * 
 * 解决方法: https://blog.csdn.net/sinat_38783046/article/details/107316888
 * 
 */

const User = require(userModel)(DemoDb, DataTypes); //引入数据表模型

const getUserById = async function(id) {
  const userInfo = await User.findOne({
    // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })

  return userInfo // 返回数据
}

// 新增一个方法，通过用户名查找
const getUserByName = async function(name) {
  const userInfo = await User.findOne({
    where: {
      username: name
    }
  })

  return userInfo
}

export default {
  getUserById, // 导出getUserById的方法，将会在controller里调用
  getUserByName
}