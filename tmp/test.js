const child = require('child_process');
const { stdout, stderr } = require('process');

// host = "114.132.252.201"
// password = "wyu8002904"
// console.log(`ssh-keyscan ${host} >> ~/.ssh/known_hosts`)
// child.exec(`ssh-keyscan ${host} >> ~/.ssh/known_hosts`)
// console.log(`sshpass -p ${password} ssh-copy-id root@${host}`)
// child.exec(`sshpass -p ${password} ssh-copy-id root@${host}`, (err, stdout, stderr) => {
//     console.log(err)
//     console.log(stdout)
//     console.log(stderr)
// })

const cp = child.exec("pwd", (err, stdout, stderr) => {

})


var out = "null";
cp.stdout.on('data', (data) => {
    // out = data
    console.log(out)
    console.log(data)
})
