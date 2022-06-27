//题目：定义三个变量存储三个整数，判断三个数如果都不相等输出0，两个相等输出1，三个都相等则输出2
let a, b, c;
if (a = b = c) {
    console.log(2);
} else if ((a = b) || (b = c) || (a = c)) {
    console.log(1);
} else {
    console.log(0)
}
//问题：第五行的 或 之间必须加括号吗？