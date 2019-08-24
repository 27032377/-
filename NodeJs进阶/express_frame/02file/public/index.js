(function() {
    window.onload = () => {
        class Page {
            constructor(text) {
                let request = new XMLHttpRequest();
                request.open('GET', '/init', true);
                request.send(null);
                request.onreadystatechange = () => {
                    if (request.readyState === 4) {
                        let data = JSON.parse(request.responseText).data;
                        if (data.text) {
                            document.getElementById('title').innerText = data.text;
                        }
                    } 
                }
            }
        }
        let page = new Page('Title:');
    }
})()