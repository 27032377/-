/**
 * Set容器：无重复的value的集合，理解为数组，但是不拥有数组的方法
 * Set(Array)
 * add(value)
 * has(value)
 * size
 * delete(value)
 * clear()
 * */

let set = new Set([1, 2, 3, 3, 3]);
set.add(4);
set.delete(3);
console.log(set, set[1], set.size, set.has(4), set.has(4));
// { 1, 2, 4 } undefined 3 true true

// 如果需要用到数组的方法，需将set转为数组，方法如下：

// let arr = Array.from(set);
let arr = [...set];

console.log(arr);


/**
 * Map容器：无序的key，无重复的key-value集合，可以理解为对象
 * Map([[key1, value1], [key2, value2]) 接收一个2维数组
 * size
 * get(key)
 * set(key, value)
 * delete(key)
 * has(key)
 * clear()
 * keys()： 返回键名的遍历器。
 * values()： 返回键值的遍历器。
 * entries()： 返回所有成员的遍历器。
 * forEach()： 遍历 Map 的所有成员。
 * */

let map = new Map([['a', 1], ['b', 2]]);
map.set('c', '3');
map.delete('b');
console.log(map, map.size, map.get('a'), map.has('b'), map.has('c'));

// { 'a' => 1, 'c' => '3' } 2 1 false true

// Map提供遍历方法forEach，将map转化为对象
let obj = {}
map.forEach((value, key, map) => {
    console.log(value, key, map);
    obj[key] = value;
})
console.log(obj);

// 其它API
console.log([...map.keys()], [...map.values()], [...map.entries()]);

// 通过...可以将map转化为数组
[...map].map((value, index) => {
    console.log(value, index);
})
