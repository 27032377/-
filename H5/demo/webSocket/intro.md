# js实现WebSocket

## 1、WebSocket

### 由于 http 请求只能由客户端发起，所有当服务器资源有变化时，客户端只能通过轮询的方式。非常浪费资源。

### WebSocket 的特点：

- 服务器可以主动向客户端推送消息，客户端也可以主动向服务器发送消息，是真正的双向平等对话，属于服务器推送技术的一种
- 建立在 TCP 协议之上，服务器端的实现比较容易
- 可以发送文本，可以发送二进制数据
- 没有同源限制，客户端可以与任意服务器通信
- 协议标识符是 ws(如果加密，则为wss)，服务器网址就是 URL。如 ws:localhost:8080/msg

## 2、简单示例

```
// 创建一个WebSocket实例
var ws = new WebSocket('ws://localhost:8080/msg');

// 建立连接
ws.open = function (evt) {
    console.log('Connection open...');
    // 想服务器发送数据
    ws.send('Hello WebSocket~');
};

// 接收到来自服务器端的响应
ws.onmessage = function (evt) {
    console.log('Received Message:' + evt.data);
    ws.close();
}

// 关闭WebSocket连接
ws.onclose = function (evt) {
    console.log('Connection closed');
}

// 报错时的回调
ws.onerror = function (event) {
    console.log(event);
}
```

## 3、API

1. WebSocket构造函数
    
    *用于创建一个 WebSocket 实例，执行后，客户端就会和服务端连接*

2. WebSocket.readyState

    ***readyState 属性返回实例对象的当前状态，共有四种***

    - CONNECTING：值为0，表示正在连接。
    - OPEN：值为1，表示连接成功，可以通信了。
    - CLOSING：值为2，表示连接正在关闭。
    - CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

    例如： if(ws.readyState === Websocket.CONNECTING) {}

3. WebSocket.bufferedAmount

    *bufferedAmount 属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。*

    ```
    var data = new ArrayBuffer(10000000);
    socket.send(data);
    if (socket.bufferedAmount === 0) {
        console.log('发送完毕');
    }
    ```