/*
 * @Description: 配置文件
 * @Author: wander
 * @Date: 2022-05-05 11:14:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-05 16:15:53
 */
const { resolve } = require('path')
const path = require('path')
const WebpackBar = require('webpackbar');
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const dayjs = require('dayjs')
const time = dayjs().format('YYYY-M-D HH:mm:ss')
process.env.VUE_APP_UPDATE_TIME = time



module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss'),
      ]
    }
  },
  configureWebpack: {
    // 设置别名
    resolve:{
      alias:{
        '@':resolve('src'),
        '*':resolve(''),
        'Assets':resolve('src/assets')
      }
    },
    module:{
      rules: [
        {
          test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
          loader: '@intlify/vue-i18n-loader',
          include: [ // Use `Rule.include` to specify the files of locale messages to be pre-compiled
            path.resolve(__dirname, 'src/lang')
          ]
        },
      ],
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      new WebpackBar({
        name: 'vue3-koa2',
      })
    ],
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