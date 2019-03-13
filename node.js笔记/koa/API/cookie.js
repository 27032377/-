/** 
 * app.keys =
 * 设置签名的Cookie密钥
 * 这些被传递给 KeyGrip，但是也可以传递给自己的 KeyGrip 实例
*/

const Koa = require('koa');
const KeyGrip = require('keygrip');
const app = new Koa();

// app.keys = ['i am a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['i am a newer secret', 'i like turtle'], 'sha256');
app.use(async ctx => {
    // 这些密钥可以倒换，并在使用{signed: true}参数来签名cookie时使用
    ctx.cookies.set('name', 'tobi', {signed: true});
    ctx.body= 'hello world';
}).listen(3000);

console.log('=start=');