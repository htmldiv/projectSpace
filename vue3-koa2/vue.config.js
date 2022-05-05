// import path from 'path'
// import AutoImport from 'unplugin-auto-import/webpack'
// import Components from 'unplugin-vue-components/webpack'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import nodeExternals from 'webpack-node-externals'

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const nodeExternals = require('webpack-node-externals')



module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    externals: [
      // nodeExternals(),
      // nodeExternals({
      //   modulesDir: path.resolve(__dirname, 'node_modules')
      // })
    ]
  },
  devServer:{
    host: 'localhost',
    port: 8090, // 端口号
    hotOnly: false, // 热更新
    https: false,// https:{type:Boolean}配置前缀
    open: false,//配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        // 是否允许跨域
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        ws: true, //如果要代理 websockets，配置这个参数
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}