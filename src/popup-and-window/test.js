function openNewWindow() {
    window.open('test1.html', 'test1');
}

function openAnotherWindow() {
    window.open('test2.html', 'test1');
}

function openWindowWithParams() {
    window.open('test1.html', 'test1', `menubar=no,location=no,toolbar=no,status=no,resizeable=no,scrollbars=no,width=200px,height=100px`);
}

function openGoogle() {
    let google = window.open('http://google.com', 'google');
    google.onload = function () {
        // console.log(google.document);
        // google.close();
    }
    setTimeout(() => google.close(),100);
}
