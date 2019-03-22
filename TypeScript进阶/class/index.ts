class Person {
    public name: string;
    private age: number = 16;
    protected height: number;
    constructor (name: string, height: number) {
        this.name = name;
        this.height = height;
    }
    public showMe () {
        console.log(`名字：${this.name}，年龄${this.age}，身高${this.height}`);
    }
}

let p = new Person('blue', 178);
p.showMe();