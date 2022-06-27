//1.概念
//同步：所有任务排队依次执行，不管前面的要多久，后面的总是等待前面完成再执行
//异步：如果执行某一操作，结果需要很长时间才能获取到（或需要外部处理），就先执行后面的
//例子：电话询问书店老板找书，同步是指老板说：你等着别挂，我给你找；异步是指老板说：我先找，找到了回你电话
//图例：课程-异步导入
//常见异步场景：
// a.定时任务:setTimeout();  setInterval()
// b.网络请求:前端向后端请求api数据,图片加载
// c.事件监听:addEventListener()


setTimeout(() => {
    console.log("async");
    },0);
console.log("sync");

//2.如何处理异步:promise

const URL = 'http://localhost:3000/class';

function callApi(url) {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);

        xhr.onload = function () {
            resolve(xhr.responseText);
        };

        xhr.onerror = function() {
            reject(xhr.statusText);
        };

        xhr.send(null);
        });
}

// callApi(URL)
//     .then(response) => {
//     console.log(response)
// })
// .catch err => console.log(err));


