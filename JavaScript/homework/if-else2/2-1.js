//题目：输入三个数，求三个数的中间值，可分别用if和三目做一遍
let a, b, c;

//if方法
if (a > b && b > c) {
    console.log(b)//abc
} else if (a > c && c > b) {
    console.log(c)//acb
} else if (b > a && a > c) {
    console.log(a)//bac
} else if (b > c && c > a) {
    console.log(c)//bca
} else if (c > a && a > b) {
    console.log(a)//cab
} else {
    console.log(b)//cba
}

//数组方法
let arr = [a, b, c];
arr.sort();
console.log(arr[1])

//三元运算符方法
a > b & b > c ? b : null;