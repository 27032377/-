# Clean Code 01

## 变量

### 使用有意义，可读性好的变量名

#### Bad：

```
 var yyyymmdstr = moment().format('YYYY/MM/DD');
```

#### Good：

```
var yearMonthDay = moment().format('YYYY/MM/DD');
```

### 对功能类似的变量名采用统一的命名风格

#### Bad：

getUserInfo();

getClientData();

getCustomerRecord();

#### Good：

getUser();

### 用易于搜索名称：

我们需要阅读的代码远比自己写的要多，使代码拥有良好的可读性且易于搜索非常重要。

#### Bad：

```
// 525600是什么？
for (var i = 0; i < 525600; i++) {
    runCronJob()
}
```

#### Good：

```
const MINUTES_IN_A_YEAR = 525600;
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
    runCronJob()
}
```

### 使用说明变量(即有意义的变量名)

#### Bad：

```
saveCityState(array[0], arrary[1]);
```

### Good：

```
const city = array[0];
const state = array[1];
saveCityState(city, state);
```

### 不要绕太多弯子

显示优于隐式

#### Bad:

```
let locations = [...];
locations.forEach(lo => {
    // lo是什么？
    dispatch(lo);
})
```

#### Good:

```
let locations = [...];
locations.forEach(location => {
    dispatch(location);
})
```

### 避免重复的描述

当类/对象名已经有意义时，对其变量进行命名不需要再次重复

### Bad:

```
let Car = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
}
```

### Good:

```
let Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
}
```

### 避免无意义的条件判断

#### Bad:

```
let breweryName
if (name) {
    breweryName = name;
} else {
    breweryName = 'Lucy';
}
```

#### Good:

```
let breweryName = name || 'Lucy';
```

### 函数功能的单一性

这是功能中最重要的原则之一

功能不单一的函数将导致难以重构、测试和理解。功能单一的函数易于重构，并使代码更加干净。

#### Bad：

```
function emailClients (clients) {
    clients.forEach(client => {
        let clientRecord = database.lookup(client);
        if (clientRecord.isActive()) {
            email(client);
        }
    });
}
```

#### Good:

```
function emailClients (clients) {
    clients.forEach(client => {
        emailClientIfNeeded(client);
    });
}

function emailClientIfNeeded (client) {
    if (isClientActive(client)) {
        email(client);
    }
}

function isClientActive (client) {
    let clientRecord = database.lookup(client);
    return clientRecord.isActive();
}
```

### 函数名应该明确表明其功能

### 使用Object.assign设置默认属性

#### Bad：

```
var arr = []
let menuConfig = {
    title: null,
    body: 'Bar',
    buttonText: null,
    cancellable: true
}
function createMenu (config) {
    config.title = config.title || 'Foo',
    config.body = config.body || 'Bar',
    config.buttonText = config.buttonText || 'Baz',
    config.cancellable = config.cancellabel || true
}
createMenu(menuConfig);
```

#### Good:

```
let menuConfig = {
    title: 'Order',
    buttonText: 'Send',
    cancellable: true
}
function createMenu (config) {
    config = Object.assign({
        title: 'Foo',
        body: 'Bar',
        buttonText: 'Baz',
        cancellable: true
    }, config)
}
createMenu(menuConfig);
```

### 不要写全局函数

在JS中污染全局是一个非常不好的实践，这样做可能和其他库起冲突，且调用你的API的用户很难感知。

如果扩展JS中的Array，为其添加一个diff函数显示两个数组间的差异，可以将diff写入Array.prototype，但这样做会和其他有类似需求的库造成冲突。

#### Bad:
```
Array.prototype.diff = function (compareArray) {
    let values = [];
    let hash = {};
    for (let i of compareArray) {
        hash[i] = true;
    }
    for (let i of this) {
        if (!hash[i]) {
            values.push(i);
        }
    }
    return values;
}
```

#### Good：

```
class SuperArray extends Array {
    constructor(...args) {
        super(...args);
    }
    diff(compareArray) {
        let values = [];
        let hash = {};
        for (let i of compareArray) {
            hash[i] = true;
        }
        for (let i of this) {
            if (!hash[i]){
                values.push(i);
            }
        }
        return values;
    }
}
```

### 采用函数式编程

函数式的编程具有更干净且便于测试的特点，尽可能的使用函数式编程

#### Bad:

```
const programmerOutput = [
    {
        name: 'A',
        linesOfCode: 500
    },
    {
        name: 'B',
        linesOfCode: 1500
    }
]
let totalOutput = 0;
for (var i = 0; i< programmerOutput.length; i++) {
    totalOutput += programmerOutput[i].lineOfCode;
}
```

#### Good:

```
const programmerOutput = [
    {
        name: 'A',
        linesOfCode: 500
    },
    {
        name: 'B',
        linesOfCode: 1500
    }
]
let totalOutput = programmerOutput.map(programmer => programmer.linesOfCode).reduce((acc, linesOfCode) => acc + linesOfCode, 0);
```

### 封装条件判断

#### Bad：

```
if (fsm.state === 'fetching' && isEmpty(listNode)) {
    //...
}
```

#### Good:

```
function shouldShowSpinner(fsm, listNode) {
    return fsm.state === 'fetching' && isEmpty(listNode);
}
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
    // ...
}
```

### 避免“否定情况”的判断

## 对象和数据结构

### 使用getters和setters

使用getters和setters获取对象的数据，远比直接使用“点”操作符具有优势：

- 1、当需要获取的对象属性执行额外操作时，执行set时可以增加规则对要变量的合法性进行判断

- 2、封装了内部逻辑，在获取时可以使用方便的增加日志和错误处理

- 3、继承该类时可以重载默认行为

- 4、从服务器获取数据时可以进行懒加载

#### Bad:

```
class BankAccout {
    constructor () {
        this.balance = 1000;
    }
}

let bankAccount = new BankAccout();

bankAccount.balance = bankAccout.balace -100;
```

#### Good:

```
class BankAccount {
    constructor () {
        this.balance = 1000;
    }

    withdraw (amount) {
        if (verifyAmountCanBeDeducted(amount)) {
            this.balace -= amount;
        }
    }
}

let bankAccount = new BankAccount();

bankAccount.withdraw(100);
```
