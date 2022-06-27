//题目：编程实现铁路托运行李规定：行李不超过50kg，托运费为0.15元/公斤；超出50kg，超出部分每公斤加收0.1元
let weight, charge;
if (weight <= 50) {
    charge = 0.15 * weight;
} else if (weight > 50) {
    charge = 7.5 + 0.25 * (weight - 50)
};
console.log(charge)