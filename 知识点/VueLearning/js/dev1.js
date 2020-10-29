let flag = true;
let name = "Ligy123";

function Sum(arg1, arg2) {
    return arg1 + arg2;
}

//导出
export {
    flag,
    name,
    Sum
};

//default只能导出一个
// export default flag;

// export default {
//     flag,
//     name,
//     Sum
// };