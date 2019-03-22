interface Point {
    x: number,
    y: number,
    z?: number,
    [propname: string]: any
}

let p:Point;

p = {
    x: 12,
    y: 12,
    c: '1',
    d: '2'
}