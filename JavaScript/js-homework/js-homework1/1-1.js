//题目：给出一个百分制成绩，按成绩分段输出“ABCDE"
let score;
score >= 0 && score <= 100;

if (score >= 90) {
    console.log('A');
}
else if (80 <= score <= 89) {
    console.log('B')
}
else if (70 <= score <= 79) {
    console.log('C')
}
else if (60 <= score <= 69) {
    console.log('D')
}
else {
    console.log('E')
}