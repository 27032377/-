# Clean Code 03

## 错误处理

错误抛出非常必要，有助于定位运行状态中的程序产生错误的位置

### 别忘了捕获错误

代码中try/catch的意味着你认为这里可能出现一些错误，应该对这些可能的错误存在相应的处理方案

#### Bad:

```
try {
    functionThatMightThrow();
} catch (error) {
    console.log(error);
}
```

#### Good:

```
try {
    functionThatMightThrow();
} catch (error) {
    console.error(error);
    notifyUserOfError(error);
    reportErrorToService(error);
}
```

### 不要忽略返回rejected的promise

## 代码规范

代码规范是约定行为，虽然不是必须遵守规范，但一旦团队约定，就应该遵守。

### 大小写一致

- JS是弱类型语言，合理的采用大小写可以得知关于变量/函数等的许多帮助信息

- 这些规则是主观定义的，团队可以根据喜欢进行选择。重点在于无论选择何种风格，都需要注意保持一致性

### 调用的函数和被调用函数应放在较近的位置

- 当函数间存在相互调用的情况时，应将两者置于较近的位置。

- 理想情况下，应该调用其他函数的函数写在调用函数的上方。