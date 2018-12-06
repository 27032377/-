let fs = require("fs");
// ./相对于当前盘符，相对路径
fs.readFile("./test01.txt", (err, data) => {
    // 回调函数
    console.log(data.toString());
});

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// node test01.js
// 先输出5050 再输出test01.txt
// 此时可以证明读取文件是异步的，CPU命令磁盘驱动器去读取文件，CPU自己去做后面的
// 单线程，源于异步I/O