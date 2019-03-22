class Calc<T> {
    a: T;
    b: T;
    show (c: T) {
        console.log(c);
    }
}

let obj = new Calc<number>();
obj.a = 12;
obj.b = 'abc';

let array:Array<number> = new Array<number>();