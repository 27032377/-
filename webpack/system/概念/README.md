# 概念

本质上，webpack是一个现代JavaScript应用程序的静态模块打包器。当webpack处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。

*从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。*

## 入口(entry)

入口七点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点依赖的。

每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。

entry指定一个或多个起点入口。默认值为 ./src

## 出口(output)

output属性告诉webpack在那里输出它创建的bundles，以及如何命名这些文件，默认为 ./dist。基本上，整个应用程序结构，都会被编译到指定的输出路径的文件夹中。

## loader

loader 让 webpack 能够去处理那些非 javascript(webpack 自身只理解 javascript) 文件。loader可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后利用 webpack 的打包能力，对它们进行处理。

## 插件(plugins)

插件可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。

## 模式(mode)

通过选择 development 或 production 之中的一个，来设置 mode 参数，可以启动相应模式下的 webpack 内置的优化。