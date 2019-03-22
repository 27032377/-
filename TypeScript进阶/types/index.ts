// enum有限可能性，一般是常亮，用大写
enum GENDER {
    MALE,
    FEMALE
}

let sex:GENDER;
sex = GENDER.MALE;
console.info(sex);

enum WEEK {
    MON, // 默认为0，然后每个key增长1、2...
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
}

// 类型推测 隐式声明
// let a = 12;

// 等价以上代码 显示声明
let a:number = 12;

let arr:number[] = [1, 2, 3];