import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import user from '../models/user.js'
const getUserInfo = async function (ctx, next){
  const id = ctx.params.id// 获取url里传过来的参数里的id
  const result = await user.getUserById(id);  // 通过await“同步”地返回查询结果
  ctx.response.body = result // 将请求的结果放到response的body里返回
}


// 新增一个方法, 通过用户名查找
const getUserAuth =  async (ctx, next) => {
  console.log("=============================")
  console.log(ctx.request.body);
  console.log("=============================")
  const data = ctx.request.body  // post 过来的数据存在request.body中
  const userinfo = await user.getUserByName(data.username)

  if(userinfo != null) {
    // 如果查无此用户会返回null
    if(bcrypt.compareSync(data.password, userinfo.dataValues.password)) {
      console.log("密码错误")
      // 密码错误
      ctx.response.body = {
        success: false,   // success 标志位是方便前端判断返回是否正确
        info: "密码错误!"
      }
    }else {
      // 密码正确
      console.log("密码正确")
      const userToken = {
        username: userinfo.username,
        id: userinfo.id
      }
      const secret = 'vue3-koa2-demo'  // 指定密钥, 这是之后用来判断token合法性的标志
      const token = jwt.sign(userToken, secret)   // 签发token
      ctx.response.body = {
        success: true,
        token,    // 返回token
      }

    }
  }else {
    console.log("用户不存在")
    // 用户不存在
    ctx.response.body = {
      success: false,
      info: '用户不存在!'
    }
  }

}



export default {
  getUserInfo, // 把获取用户信息的方法暴露出去
  getUserAuth // 把获取用户信息的方法暴露出去
} // 把获取用户信息的方法暴露出去