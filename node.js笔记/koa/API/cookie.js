/** 
 * app.keys =
 * 设置签名的Cookie密钥
 * 这些被传递给 KeyGrip，但是也可以传递给自己的 KeyGrip 实例
*/

const Koa = require('koa');
// const KeyGrip = require('keygrip');
const app = new Koa();

// app.keys = ['i am a newer secret', 'i like turtle'];
// app.keys = new KeyGrip(['i am a newer secret', 'i like turtle'], 'sha256');
// app.use(async ctx => {
    // 这些密钥可以倒换，并在使用{signed: true}参数来签名cookie时使用
//     ctx.cookies.set('name', 'tobi', {signed: true});
//     ctx.body= 'hello world';
// }).listen(3000);

app.use(async ctx => {
    if (ctx.url === '/index') {
        ctx.cookies.set('cid', 'hello cookie', {
            domain: 'localhost', // cookie所在的域名
            path: '/', // cookie所在路径
            maxAge: 2*60*60*1000, // cookie有效时长
            expires: new Date('2019-03-15'), // 失效时间
            httpOnly: false, // 仅服务端访问
            overwrite: false, // 是否允许重写
            signed: false // 签名
        });
        ctx.body = 'cookie is ok';
    } else {
        if (ctx.cookies.get('cid')) {
            ctx.body = ctx.cookies.get('cid');
        } else {
            ctx.body = 'cookie is none';
        }
    }
});

app.listen(3003, () => {
    console.log('Server started...');
});