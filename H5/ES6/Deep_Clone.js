/**
 * 基本数据类型栈堆中一一对应，不存在深/浅拷贝
 * 只针对对象、数组，保存的是堆内存中的引用
 * 故深拷贝是将对象、数组遍历直至基本数据类型后进行拷贝
 * 函数不使用
* */

/*
let arr1 = [1, 2];
let arr2 = arr1;
arr2[0] = 'a';
console.log(arr1, arr2);

let obj1 = {a: '1'};
let obj2 = obj1;
obj2.a = '2';
console.log(obj1, obj2);*/

function checkType (target) {
    // 方法一：substring截取字符串
    // const len = Object.prototype.toString.call(target).length;
    // return Object.prototype.toString.call(target).substring(8, len -1);

    // 方法二：slice截取字符串，可以从后往前
    return Object.prototype.toString.call(target).slice(8, -1);
}

function clone (target) {
    let result, type = checkType(target);
    if (type === 'Object') {
        result = {};
    } else if (type === 'Array') {
        result = [];
    } else {
        return target;
    }
    for (let i in target) {
        let value = target[i];
        if (checkType(value) === 'Object' || checkType(value) === 'Array') {
            arguments.callee(value)
        } else {
            result[i] = value
        }
    }
    return result
}

let obj1 = {a: '1', b: '2'};
let obj2 = clone(obj1);
obj2.a = '3';
console.log(obj1, obj2);

let arr1 = [1, 2, 3];
let arr2 = clone(arr1);
arr2[1] = 4;
console.log(arr1, arr2);