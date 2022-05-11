var str = `
{
    "custom_stats": {},
    "global_custom_stats": {},
    "plays": [
        {
            "play": {
                "duration": {
                    "end": "2022-05-11T09:52:19.385708Z",
                    "start": "2022-05-11T09:52:18.340791Z"
                },
                "id": "00163e02-8906-29b1-8a1b-000000000007",
                "name": "Ansible Ad-Hoc"
            },
            "tasks": [
                {
                    "hosts": {
                        "114.132.252.201": {
                            "_ansible_no_log": false,
                            "action": "command",
                            "ansible_facts": {
                                "discovered_interpreter_python": "/usr/bin/python"
                            },
                            "changed": true,
                            "cmd": "cat /home/ajinlong/common.sh",
                            "delta": "0:00:00.051732",
                            "end": "2022-05-11 17:52:19.326091",
                            "invocation": {
                                "module_args": {
                                    "_raw_params": "cat /home/ajinlong/common.sh",
                                    "_uses_shell": true,
                                    "argv": null,
                                    "chdir": null,
                                    "creates": null,
                                    "executable": null,
                                    "removes": null,
                                    "stdin": null,
                                    "stdin_add_newline": true,
                                    "strip_empty_ends": true,
                                    "warn": true
                                }
                            },
                            "rc": 0,
                            "start": "2022-05-11 17:52:19.274359",
                            "stderr": "",
                            "stderr_lines": [],
                            "stdout": "#!/bin/bash pwd",
                            "stdout_lines": [
                                "#!/bin/bash",
                                "pwd"
                            ]
                        }
                    },
                    "task": {
                        "duration": {
                            "end": "2022-05-11T09:52:19.385708Z",
                            "start": "2022-05-11T09:52:18.362966Z"
                        },
                        "id": "00163e02-8906-29b1-8a1b-000000000009",
                        "name": "shell"
                    }
                }
            ]
        }
    ],
    "stats": {
        "114.132.252.201": {
            "changed": 1,
            "failures": 0,
            "ignored": 0,
            "ok": 1,
            "rescued": 0,
            "skipped": 0,
            "unreachable": 0
        }
    }
}`

var json = JSON.parse(str)
// console.log(json['plays'][0]['tasks'][0]['hosts']['114.132.252.201']['stdout_lines'])

var strb = require('./simple.json')
console.log(strb)

var jsonb = JSON.parse(JSON.stringify(strb))
console.log(jsonb)
// console.log(Object.keys(jsonb)[0])