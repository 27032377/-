# 模块方法

## import

通过 import 以静态的方式，导入另一个通过 export 导出的模块

## export

默认导出模块，或具名导出模块

## import()

*import('path/to/module') -> Promise*

动态地加载模块。调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会被分离到一个单独的 chunk 中。

## require.resolve

以同步的方式获取模块的ID。有编译器compiler来确保依赖项在最终输出bundle中可用。

## 特定的 webpack 方法

- require.context

```
// includeSubdirs 可选，默认true，即包含子文件夹
// filter 可选的，匹配正则文件
require.context(directory: String, includeSubdirs: Boolean, filter: RegExp)

let context = require.context('./components', true, /\.html$/);
let componentA = context.resolve('componentA');
```

- require.include

引入一个不需要执行的依赖，这可以用于优化输出chunk中的依赖模块的位置

```
require.include('a');
```