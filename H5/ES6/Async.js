async function foo () {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log('foo starting')
            setTimeout(() => {
                console.log('2000s later...');
                resolve('aaa');
            }, 2000);
        } else {
            reject('xxx');
        }
    })
}

async function fn () {
    return Promise.resolve('ooo');
}

function normal () {
    return 'normal'
}

async function bar () {
    let c = normal();
    let a = await foo();
    let b = await fn();
    console.log(c)
    console.log(b);
    console.log(a);
}

bar();