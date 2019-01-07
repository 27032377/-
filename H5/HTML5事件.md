# HTML事件

- contectmenu 事件

    通过单击鼠标可以调出上下文菜单，*在Windows中是右键，在Mac中是ctrl+单击*


- beforeunload 事件

    浏览器卸载页面前触发，*刷新页面能监听到，回退需要监听popstate事件*

- DOMContentLoaded 事件

    window的load事件会在页面中的一切都加载完毕时触发。而DOMContentLoaded事件则是在形成完整的DOM树之后就会触发

- hashchange 事件

- orientationchange 事件

    监听浏览器横向切换，window.orientation共有0 90 -90 3种状态


## 事件委托

每一个dom绑定事件相当于每一个全局对象，会占用大量内存，对“事件处理程序过多”问题的解决方案就是事件委托。事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

```
<ul id="myList">
    <li id="goSomewhere">Go Somewhere</li>
    <li id="doSomething">Do Something</li>
    <li id=""sayHi>Say Hi</li>
</ul>

const item1 = document.getElementById('goSomewhere');
const item2 = document.getElementById('doSomething');
const item3 = document.getElementById('sayHi');

// 传统做法
item1.addEventListener('click', () => {
    ...
}, true);
item2.addEventListener('click', () => {
    ...
}, true);
item3.addEventListener('click', () => {
    ...
}, true);

// 事件委托
const myList = document.getElementById('myList');
myList.addEventListener('clicl', e => {
    const target = e.target.id;
    switch (target) {
        case 'goSomewhere':
            ...
        break;
        case 'doSomething':
            ...
        break;
        case 'sayHi':
            ...
        break;
        default:
        break;
    }
},false)
```