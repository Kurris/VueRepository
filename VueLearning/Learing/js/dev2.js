// 导入使用
import { flag, name, Sum } from './dev1.js';

if (flag) {
    console.log("flag==true");
    console.log(name);
}

console.log(Sum(5, 2));

// 导出所有
// import * as XXXName from './dev1.js'