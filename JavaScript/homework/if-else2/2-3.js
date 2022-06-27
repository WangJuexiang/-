//题目：编程判断3人中谁的年龄最大，并打印最大者的年龄
let ageA, ageB, ageC;
if (ageA > ageB && ageA > ageC) {
    console.log(ageA)
} else if(ageB > ageA && ageB > ageC){
    console.log(ageB)
} else {
    console.log(ageC)
}
//问题：是否会有年龄相同的情况？