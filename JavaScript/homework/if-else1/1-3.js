//题目：存储三角形三边的长，判断并输出是否能组成三角形
let a, b, c;
if (a + b > c && a + c > b && b + c > a) {
    console.log('triangle')
} else {
    console.log('not a triangle')
}