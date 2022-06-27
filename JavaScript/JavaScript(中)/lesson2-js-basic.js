//1.常量
const interestRate = 0.3
console.log(interestRate)

//2.变量命名规则
//1.不能用系统关键词命名变量（如if,var,ture ...）
//2.不能用无意义词汇命名
//3.不能以数字起头
//4.用驼峰命名法代替-和空格，且大小写敏感
let nickName = 'jiojio'

//3.变量类型
//3.1基本变量类型：字符串、数字、布尔值、未定义
let name = 'jiojio';
let age = 25;
let isLearning = true;
let hisAbility = undefined

//3.2引用变量类型：对象、数组、功能
let negativeAttitude = null;
//3.2.1对象，以及改变对象某一属性
let person = {
    name: 'jiojio',
    age: 24
};

person.name = 'lance'

//3.2.2数组,以及选中、添加数组中元素
//js中数组内元素可以为不同种类
let selectedColors = ['red', 'blue', 'yellow'];
selectedColors[3] = 'green'
console.log(selectedColors[0]);
//数组长度：length
console.log(selectedColors.length)

//3.2.3函数
function greet(name, lastName) {
    console.log('hello' + name + ' ' + lastName)
}

greet('Eli', 'Locker');

//if else语句
let hour = 20;

if (hour > 6 && hour <= 12)
    console.log('good morning');
else if (hour > 12 && hour <= 18)
    console.log('good afternoon');
else
    console.log('good evning');

//for循环
// for (let i =0; i<3001; i++);
// console.log('i love you')

//逻辑运算符
//1. 或运算||
let time = 12;
let isWeekend = true;
if(time>6 || time <18 || isWeekend) {
    alert('The office is closed');
}

//2. 与运算 &&
let hours = 14;
let minutes = 30;

if(hour==14 && minute==30) {
    alert('14:30')
}

//3.非运算 ！
//!!可将任意类型值转换为布尔值

