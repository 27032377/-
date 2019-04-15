# 开发中 Server(devServer)

## clientLogLevel: string

当使用内敛模式 inline mode 时，在开发工具 devtools 的控制台江显示消息。

可以阻止这些消息显示
```
clientLogLevel: 'none'
```

CLI
```
webpack-dev-server --client-log-level none
```

可能的值有 none、error、warning或者info(默认值)

## color CLI only

```
webpack-dev-server --color
```

## comporess: boolean

启用gzip压缩
```
compress: true
```

CLI
```
webpack-dev-server --compress
```

## contentBase: boolean|string|array

告诉服务器从哪里提供内容。只有提供静态文件时才需要。

默认情况下，将使用当前工作目录作为内容的目录，也可以修改为其他目录：
```
contentBase: path.join(__dirname, 'public')

// 多个目录提供内容
contentBase: [path1, path2]

// 禁用
contentBase: false
```

CLI
```
webpack-dev-server --content-base /path/to/content/dir
```

## historyApiFallback: boolean|object

当使用HTML history API时，任意404相应都可能需要被替换成index.html。
```
historyApiFallback: true
```

CLI
```
webpack-dev-server --history-api-fallback
```

## host: string

指定用用一个host。默认为localhost。如果希望方位外部：
```
host: IP
```

CLI
```
webpack-dev-server  --host IP
```

## hot: boolean

启用webpack的模块热替换特性
```
hot: true
```

## https: boolean|object

默认情况下，dev-server通过http提供服务。也可以选择带有https的http/2提供服务
```
https: true
```

CLI
```
webpack-dev-server --https
```

## inline: boolean

inline、iframe默认，默认为inline

> 推荐使用inline内联模式。包含来自websocket的HMR触发器，实现热替换。

## lazy:boolean

当启用lazy时，dev-server只有在请求时才编译包。webpack不会监听文件改动，称之为‘惰性模式’。

## noInfo: boolean

启用noInfo后，启动、保存之后，显示的bundle信息将会被隐藏，错误警告仍显示

## open: boolean

默认浏览器打开

## port: number

指定要监听的端口号

## proxy: object

请求URL代理，来自http-proxy-middleware。

```
// 本地至api的请求将会被改变请求原点后，代理至https: example.com
proxy: {
    './api': {
        target: 'https: example.com',
        changeOrigin: true,
        secure: false // 接收https的无效证书
    }
}
```

## progress: boolean CLI only

将运行进度输出到控制台
```
webpack-dev-server --progress
```

## public: string

当使用内联模式并代理dev-server时，内联的客户点并不总是知道要连接到什么地方。可以通过public来指定

```
public: 'myapp.test:80'
```

## publicPath: stirng

此路径下的打包文件可以在浏览器中访问

## quiet: boolean

启用quiet后，任何内容都不会被打印到控制台，包括错误信息