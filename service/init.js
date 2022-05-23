var child = require('child_process');

// module.exports = function () {
//     setInterval(() => {
//         console.log("in setinterval")
//         child.exec("cd ../shell;./getdiskinfo.sh", (err, stdout) => {
//             console.log("execute")
//             console.log(stdout)
//         })
//     }, 1000);
// }

setInterval(() => {
    // console.log("in setinterval")
    child.exec("cd ./shell;./getdiskinfo.sh", (err, stdout) => {
        // console.log("execute")
        // console.log(stdout)
    })
}, 10000);

module.exports = () => { }