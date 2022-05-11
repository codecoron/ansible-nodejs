const child = require('child_process');

class Service {
    execute(shell) {
        child.exec(shell, (err, stdout, stderr) => {
        })
    }

    executeSync(shell) {
        child.execSync(shell)
    }
}

const service = new Service()
module.exports = service