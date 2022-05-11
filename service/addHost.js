const child = require('child_process')
const { stderr } = require('process')
const addHost = (data) => {
    host = data.host
    password = data.password
    console.log(host)
    console.log(password)
    var cmd_arr = [`ssh-keyscan ${host} >> ~/.ssh/known_hosts`, `sshpass -p ${password} ssh-copy-id root@${host}`]
    cmd_arr.forEach(element => {
        child.exec(element, (err, stdout, stderr) => {
            if (err === null) return
            console.log(stderr)
        })
    })
}

// addHost({ host: '114.132.252.201', password: "wyu8002904" })

module.exports = addHost