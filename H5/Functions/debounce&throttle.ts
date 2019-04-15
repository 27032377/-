export default class Debounce {
    public fn: () => void;
    public time: number;
    constructor (fn, time) {
        this.fn = fn;
        this.time = time;
    }
    public runE () {
        let timer: any;
        if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                this.fn();
            }, this.time)
        }
    }
}

window.addEventListener('scorll', e => {
    new Debounce(() => {console.log('1')}, 1000).runE()
}, {
    passive: true
})

export class Throttle {
    public fn: () => void;
    public time: number;
    constructor (fn, time) {
        this.fn = fn;
        this.time = time;
    }
    public runE () {
        let prev: number = +Date.now();
        const this_ = this;
        return function () {
            const args = arguments;
            const now: number = +Date.now();
            if (now - prev >= this_.time) {
                this_.fn.apply(this, args);
                prev = now;
            }
        }
    }
}

window.addEventListener('touchmove', e => {
    new Throttle(() => {
        console.log('66666');
    }, 1000).runE();
}, {
    passive: true
})
