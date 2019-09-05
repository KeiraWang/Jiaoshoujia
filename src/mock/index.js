const Mock=require('mockjs');
// 第一个参数是请求的名字(前端的请求地址就是这个名字)，第二个参数是请求方式，第三个参数是请求的具体json文件(具体的接口)
// ./表示的是当前级
Mock.mock("/xiaoming/xiaohong","get",require("./json/haha"));
Mock.mock("/hehe","post",require("./json/keke"));
Mock.mock("/homedata","get",require("./json/homeData"));
