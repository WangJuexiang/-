//问题：打印1-100奇数之和，偶数之和
let sumOdd = 0;
let sumEven = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i
    } else {
        sumOdd += i
    }
}
console.log('100以内的奇数和:' + sumOdd);
console.log('100以内的偶数和:' + sumEven);



