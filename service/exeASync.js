var child = require('child_process');
const { stdout, stderr } = require('process');

function execute(shell) {
    child.exec(shell, (err, stdout, stderr) => {
        console.log(stdout)
    })
}

module.exports = execute

// child.exec("top -b -n 2 -d 3", (err, stdout, stderr) => {
//     console.log(stdout)
//     console.log("内部END")
// })
// console.log("END")
// console.log(res)

// child.exec('ls', function (err, sto) {
//     console.log(sto);//sto才是真正的输出，要不要打印到控制台，由你自己啊
// })



// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });
