
function isHttp(str) {
    return str.startsWith("http:/");
}

function isHtml(str) {
    return str.endsWith(".html", str.length - 5) == 0;
}

str = prompt("Enter URL:");
alert(`${str} : http: ${isHttp(str)}, html:${isHtml(str)}`);