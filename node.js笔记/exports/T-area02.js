function People (name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

People.prototype.sayHello = function () {
    console.log(`你好， 我是${this.name}，我今年${this.age}岁，我是${this.sex}生！`)
}

// 暴露exports对象，通常用于暴露多个属性
// exports.People = People;

// 暴露一个，通常用于暴露构造函数(类)
module.exports = People;