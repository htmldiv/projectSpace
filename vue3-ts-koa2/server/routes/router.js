import KoaRouter from 'koa-router'
import UserController from './../controllers/user.js'
const router = KoaRouter()
export default function(app) {
  router.post('/user/:id', UserController.getUserInfo) //用POST请求
  router.post('/api/user/login', UserController.getUserAuth) //用POST请求
  app.use(router.routes()).use(router.allowedMethods())
}