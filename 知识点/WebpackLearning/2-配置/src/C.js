// 这是ES6的导出方式,也可以直接在声明前使用export
let name = "ligy";
let age = 23;

function Show() {
    return "姓名:" + name + " " + "年龄:" + age
}

export {
    name,
    age,
    Show
}