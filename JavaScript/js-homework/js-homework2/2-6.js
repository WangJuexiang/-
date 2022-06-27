//题目：编写一个完成两个数四则运算的程序。如：用户输入34+56则会输出结果为90.00，要求运算结果保留两位小数，
//用户输入时将两个运算数以及运算符都输入，根据运算符求结果
let input;
function add(a, b) {
    if (input = "a+b") {
        return (a + b).toFixed(2)
    } else if (input = "a-b") {
        return (a - b).toFixed(2)
    } else if (input = "a*b") {
        return (a * b).toFixed(2)
    } else if (input = 'a/b') {
        return (a / b).toFixed(2)
    }
}