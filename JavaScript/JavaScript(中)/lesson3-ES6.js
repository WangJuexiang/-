const person = {
    name: 'jiojio',
    walk: function () {}, //函数如果在一个对象中，被成为一个方法
    talk() {} //更简单的写法
}
person.walk();
//this和bind
const walk = person.walk.bind(person);
walk();

//箭头函数
const square =function (number) {
    return number * number;
}
//等价于
const square = (number) => {
    return number * number;
}
//或
const square = number => number * number;
//实例
const jobs =[
    { id:1,isActive: true },
    { id:2,isActive: true },
    { id:3,isActive: false },
];

const activeJobs = jobs.filter(function (job){return job.isActive;})
//等价于
const activeJobs = jobs.filter((job) => job.isActive);

//map：在react中常用语渲染列表
const colors = ["red", "green", "blue"];
const items = colors.map(color => '<li>${colors}</li>');
console.log(items);

//对象重组
const address = {
    street: '',
    city: '',
    country: ''
};

const street =address.street
const city =address.city
const country =address.country
//等价于
const { street, city, country } = address

//扩展运算符
const first = [1, 2, 3];
const second = [4, 5, 6];
//数组组合（对象组合同理）
const combined = first.concat(second);
//等价于
const combined = [...first,...second];
//同时可以在数据间增加值
const combined = [...first, "a", ...second, "b"];
//克隆数组
const clone = [...first];

//继承与模块：extend and export&import