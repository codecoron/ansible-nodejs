const child = require('child_process');
child.exec("ansible webservers -m shell -a 'cat /home/ajinlong/common.sh'", (err, stdout) => {
    var json_stdout = JSON.parse(stdout)
    ret = json_stdout['plays'][0]['tasks'][0]['hosts'];
    for (keyid in ret) {
        ret[keyid]['stdout_lines'].forEach(element => {
            console.log(element)
        });
    }
})