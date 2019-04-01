# Clean Code 02

## 类

### 单一职责原则(SRP)

- 将多个功能塞进一个类看似方便，但这将导致你的类无法达到概念上的类聚，并经常不得不进行修改

- 如果一个类具有太多太杂的功能，当你对其中一小部分进行修改时，将很难想象这一修改对依赖该类的其他模块会带来什么样的影响

#### Bad：

```
class UserSettings {
    constructor (user) {
        this.user = user;
    }

    changeSettings (settings) {
        if (this.verifyCredentials(user)) {
            // ...
        }
    }

    verifyCredentials (user) {
        // ...
    }
}
```

#### Good:

```
class UserAuth {
    constructor (user) {
        this.user = user;
    }

    verifyCredentials () {
        // ...
    }
}

class UserSettings {
    construcotr (user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    changeSettings (settings) {
        if (this.auth.verifyCredentials()) {
            // ...
        }
    }
}
```

### 开/闭原则(OCP)

这一原则指的是我们应允许用户方便的扩展我们代码模块的功能，而不需要打开js文件源码手动对其进行修改

```
class AjaxRequester {
    constructor () {
        this.HTTP_METHODS = ['POST', 'PUT', 'GET'];
    }

    get (url) {
        // ...
    }

    // Good:
    addHTTPMethod (method) {
        this.HTTP_METHODS.push(method);
    }
}
```

### 使用ES6的class而不是ES5的Function

### 优先使用组合模式而非继承

什么时候继承具有更大的优势呢？

- 继承关系表现为‘是一个’而非‘有一个’(动物->人 或 用户->用户细节)

- 可以复用基类的代码('human'可以看成‘All animal’的一种)

- 希望当基类改变时所有派生类都收到影响(如修改'all animals'移动时的卡路里消耗量)

## 并发

### 使用Promise代替回调

回调不够整洁会造成大量的嵌套

### Async/Await是较Promise更好的选择