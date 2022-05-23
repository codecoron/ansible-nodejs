const router = require('koa-router')()
// const getIP = require('../service/ip')
// const service = require('../service/service')

router.get('/:id/diskinfo', (ctx, next) => {
    // 1. 根据对应的ID去获取IP 2.通过SSH执行命令获取磁盘信息的脚本
    console.log(ctx.params.id)
    // const ip = getIP(id)
    // var ret = service.getDiskinfo(ip)
    ctx.body = ["20/tcp", "21/tcp"]
    next()
})
module.exports = router