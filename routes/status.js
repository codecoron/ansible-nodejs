const router = require('koa-router')()
// const getIP = require('../service/ip')
// const service = require('../service/service')

router.get('/diskinfo', (ctx, next) => {
    // 1. 根据对应的ID去获取IP 2.通过SSH执行命令获取磁盘信息的脚本
    console.log(ctx.params.id)
    // const ip = getIP(id)
    // var ret = service.getDiskinfo(ip)
    // ctx.body = ["20/tcp", "21/tcp"]
    var count = 0;
    count++
    console.log("count", count)
    delete require.cache[require.resolve('../shell/df.json')];
    var diskinfo = require('../shell/df.json')
    ctx.body = diskinfo;
    next()
})

router.post('/testpost',(ctx,next)=>{
	console.log("post")
	ctx.body = ctx.request.body();
	next()
})
module.exports = router
