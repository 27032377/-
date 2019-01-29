const events = require('events');

class MyEmitter extends events {}

const myEvent = new MyEmitter()

// on接受事件
myEvent.on('event', function (params) {
    console.log('触发了名为event的事件')
    console.log(params)
    console.log(this) // this指向MyEmitter
})

// once仅接受并执行一次
// myEvent.once('...')

// emit发出事件
// myEvent.emit('event', 'xxxx')


// setTmmediate()或process.nextTick()切换到异步模式
myEvent.on('async', (a, b) => {
    // setImmediate(() => {
    //     console.log(a)
    // })
    process.nextTick(() => {
        console.log(a)
    })
    console.log(b)
})
myEvent.emit('async', 'a', 'b')
// 打印
// b
// a


/*
error事件
    当event实例出错时，应该触发error事件
    如果没有为error事件注册监听器，则当error事件触发时，会抛出错误并退出Node.js进程
    作为最佳实践，应该始终为error事件注册监听器
*/
const myEvent1 = new MyEmitter()
myEvent1.on('error', err => {
    console.error('错误信息')
})
myEvent1.emit('error', new Error('错误信息'))

/*
removeListener(eventName, listener)
    从名为eventName的事件的监听器数组这种移除指定的listener
    等同于.off()
    一旦事件被触发，所有绑定到该事件的监听器都会按顺序依次调用。
    这意味着，在事件触发之后、且最后一个监听器执行完成前，removeListener()或removeAllListeners()不会从emit()中移除它们
*/