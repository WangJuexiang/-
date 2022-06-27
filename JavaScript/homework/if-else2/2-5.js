//题目：有一个函数,在x<1时,y=x;在1<=x<10时,y=2x-1;x>=10时,y=3x-11;写一段程序，输出x，输出y值
let x;
function pieceWise(x) {
    if (x < 1) {
        y = x;
    } else if (1 <= x < 10) {
        y = (2 * x) - 1;
    } else if (x >= 10) {
        y = (3 * x) - 11
    }
    return y;
}

