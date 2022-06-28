
//获取标签
var scoreEl = document.getElementsByClassName("score")[0]
var timeEl = document.getElementsByClassName("time")[0];
var bigEl = document.getElementsByClassName("big-text")[0];
var smallArray = document.getElementsByTagName("li");
//定义变量
var score = 0;
var time = 110;//默认时间
//重点
var textArray = ["红", "黄", "蓝", "绿", "紫"];
var colorArray = ["red", "yellow", "blue", "green", "purple"];
//定义变量 存储答案
var daan;
//封装函数
//产生随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//处理大字
function changeBigText() {
    //随机文字
    var index = randomNum(0, textArray.length - 1);
    bigEl.innerHTML = textArray[index];
    //随机颜色
    var colorIndex = randomNum(0, colorArray.length - 1);
    bigEl.style.color = colorArray[colorIndex];
    //答案接收
    daan = colorArray[colorIndex];
}
//调用处理大字的方法
changeBigText();
//----------------处理小字------------
function changeSmallText() {
    //打乱文字数组
    crashArray(textArray);
    //打乱颜色数组
    crashArray(colorArray);
    //打乱之后再给li赋值
    for (var i = 0; i < smallArray.length; i++) {
        smallArray[i].innerHTML = textArray[i];
        smallArray[i].style.color = colorArray[i];
    }

}
//调用改变小字的函数
changeSmallText();
//打乱数组
function crashArray(arr) {
    for (var i = 0; i < 10; i++) {
        var n1 = randomNum(0, 4);
        var n2 = randomNum(0, 4);
        if (n1 != n2) {
            var t = arr[n1];
            arr[n1] = arr[n2];
            arr[n2] = t;
        }
    }
}
//-------------------------添加点击事件和判断
for (var i = 0; i < 5; i++) {
    smallArray[i].onclick = function () {
        console.log(getColorByText(this.innerHTML));
        var color = getColorByText(this.innerHTML);
        //与答案对比
        if (color == daan) {
            //加分 并刷新大小字
            score++;
            changeBigText();
            changeSmallText();
            //将分值赋值给分数标签
            scoreEl.innerHTML = "分数" + score;
        }
    }
}
//处理点击的中文汉字 获取其对应的英文单词
function getColorByText(text) {
    switch (text) {
        case "红":
            return "red";
        case "黄":
            return "yellow";
        case "蓝":
            return "blue";
        case "绿":
            return "green";
        case "紫":
            return "purple";
        default:
            break;
    }
}

//------------------------计时器
var s1 = setInterval(function () {
    time--;
    if (time == 0) {
        //清除计时器
        clearInterval(s1);
        //关闭点击事件
        for (var i = 0; i < smallArray.length; i++) {
            smallArray[i].onclick = null;
        }
    }
    timeEl.innerHTML = "剩余时间:" + time;
}, 1000);
