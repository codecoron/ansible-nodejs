// 导入express模块
const express = require('express');
// 创建应用
const app = express();

// 设置路由
app.get('/', (req, resp) => {
    // 输出响应
    // resp.json(req.headers);
    const hostinfo = require('./hostInfo.json')
    console.log(hostinfo)
    resp.json(hostinfo)
});
// 开启监听
app.listen(8080, () => {
    console.log('listen on 8080');
});

