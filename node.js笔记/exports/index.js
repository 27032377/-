// require('./T-area01.js');
// console.log('引入全局定义a的js文件，但无法获取到a' + a);

// 定义变量area来缓存暴露的属性，接收exports对象
let area = require('./T-area01.js');
console.log(area.a);


let People = require('./T-area02.js');

// 由于exports导入，exports对象中存在People属性，故代码看起来复杂不清晰
// new People.People('xx', '男', 18).sayHello();

// 由module.exports暴露
new People('xx', '男', 18).sayHello();
