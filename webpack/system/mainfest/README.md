# mainfest

在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：

- 编写的源码

- 源码会依赖的任何第三方的 library 或 vendor 代码

- webpack 的 runtime 和 mainfest，管理所有模块的交互

## Runtime

runtime，以及伴随的 mainfest 数据，主要是指：在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。

## Mainfest

当编译器compiler开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 Mainfest，当完成打包并发送到浏览器时，会在运行时通过 Mainfest 来解析和加载模块。无论选择哪种模块语法，import 和 require 语句都已经转换为__webpack_require__方法，此方法指向模块标识符module identifier。通过使用mainfest中的数据，runtime将能够查询模块标识符，检索出背后的对应模块。