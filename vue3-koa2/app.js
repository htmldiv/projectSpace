//app.js

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/routes/router.js'
import path from 'path'


const app = new Koa()
app.use(bodyParser())
app.use(async function (ctx, next) {  //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: '没有权限'
      }
    } else {
      throw err
    }
  }
})
router(app)

app.listen(3030, () => {
  console.log('server is running at http://localhost:3030') //监控3000端口
})

export default app