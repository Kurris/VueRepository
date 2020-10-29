function Add(a, b) {
    return a + b;
}

function Sub(a, b) {
    return a - b;
}


// CommonJS的导出方式
module.exports = {
    Add,
    Sub,
}


require("../css/normal.css");
require("../css/normal.less");