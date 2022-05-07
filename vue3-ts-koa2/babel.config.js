/*
 * @Description: 
 * @Author: wander
 * @Date: 2022-05-06 00:26:06
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 18:06:01
 */
module.exports = {
  presets: [
    "@babel/preset-env",
    // '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      plugins: [
        'dynamic-import-node'
        // [
        //   'component',
        //   {
        //     libraryName: 'element-plus',
        //     styleLibraryName: 'theme-chalk'
        //   }
        // ]
      ]
    }
  }
}
