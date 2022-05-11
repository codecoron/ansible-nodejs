#!/bin/bash

cat /etc/ansible/hosts | grep -v ^\# | grep webservers

if [ $? -ne 0 ];then
    echo [webservers] >> /etc/ansible/hosts
fi

