/*
 * @author jiangjie
 * @desc require.context
 * require.context()方法用来创建自己的(模块)上下文，
 * 可以同时引入该文件夹下所匹配的所有文件，
 * 这个方法有3个参数：
 * 1、要搜索的文件夹目录，
 * 2、是否还应该搜索它的子目录，
 * 3、以及一个匹配文件的正则表达式
*/

require.context(directory, useSubdirectories = false, regExp = /^\.\//)

require.context('./test', false, /\.test.js$/);
// 创建了一个包含了test文件夹(不包含自录)下面的、所有文件名以'.test.js'结尾的、能被require请求到的文件的上下文

require.context('../', true, /\.stories\.js$/);
// 创建了一个包含了父级文件夹(包含子目录)下面的、所有文件名以'stories.js'结尾的上下文

// require.context返回一个函数
function webpackContext(req) {
    return __webpack_require__(webpackContextResolve(req))
}
// 传入一个key，返回一个对象，对象有default属性，值为文件内容

// 在Vue项目中的应用
// 写在main.js文件中
// 创建了一个/components/global文件夹(包含子目录)内，所有文件名以'.vue'结尾的上下文
const requireComponent = require.context('@/components/global', true, /\.vue$/)
// 获取vue文件的文件名
const componentName = /^\S+\/(\w+).vue$/.exex(key)[1]
// component为组件实例
const component = requireComponent(key).default
// 注册为全局组件
Vue.component(componentName, component)