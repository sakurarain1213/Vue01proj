# vue01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Vue 3.x    即vue-cli的4.5以上版本
Element UI是一款基于Vue2.x 的界面框架；Element Plus是一款基于Vue3.x 的界面框架；
element-plus ^2.3.7
各个包的功能：

assets:里面存放的都是一些图片，或者css、js等一些静态资源
components:里面放一些组件（.vue格式），页面可以直接调用
router：写路由的地方，完成路径和页面的一个映射，通过路径就能访问这个页面，把页面搞进去通过路径访问
store：用来存储一些参数变量,一般用来设置vuex，实现组件之间的通信
views：存放一些视图页面
package.json:就是定义的一些依赖
App.vue：就是引用一些组件的
具体在写界面的时候，使用element组件更简单
安装element组件命令：npm install element-plus --save
实现element-plus的引入：在main.js中添加以下内容：

