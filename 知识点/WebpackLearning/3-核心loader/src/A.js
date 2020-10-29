// CommonJS的导入方法
const { Add, Sub } = require("./js/B.js");

console.log(Add(1, 2));

console.log(Sub(1, 2));


import { name, age, Show } from "./js/C.js";

console.log(Show());