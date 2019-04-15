(function () {
    let app = document.createElement('div');
    app.id = 'app';
    let element = document.createElement('div');
    element.innerText = process.env.NODE_ENV;
    app.appendChild(element);
    document.body.appendChild(app);
})()