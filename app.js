// 导入express模块
const express = require('express');
// 创建应用
const app = express();

// # 解决跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 设置路由
app.post('/vm/restart', (req, resp) => {
    // 输出响应
    // resp.json(req.headers);
    //执行重启
    var spawn = require('child_process').spawn;
    free = spawn('reboot');

    const hostinfo = require('./hostInfo.json')
    console.log(hostinfo)
    resp.json(hostinfo)
});
// 开启监听
app.listen(8080, () => {
    console.log('listen on 8080');
});

