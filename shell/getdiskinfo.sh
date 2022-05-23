#!/bin/bash

echo [ > df.json

Filesystem=`df -h|grep -v Filesystem | awk '{print $1}' | xargs`
Size=`df -h | grep -v Filesystem | awk '{print $2}' | xargs`
Used=`df -h | grep -v Filesystem | awk '{print $3}' | xargs`
Avail=`df -h | grep -v Filesystem | awk '{print $4}' | xargs`
UsedPer=`df -h | grep -v Filesystem | awk '{print $5}' | xargs`
Mounted=`df -h | grep -v Filesystem | awk '{print $6}' | xargs`
# 转化为数组
f_arr=($Filesystem)
s_arr=($Size)
u_arr=($Used)
a_arr=($Avail)
p_arr=($UsedPer)
m_arr=($Mounted)
template="{\"Filesystem\":\"var1\",\"Size\":\"var2\",\"Used\":\"var3\",\"Avail\":\"var4\",\"UsedPer\":\"var5\",\"Mounted\":\"var6\"}"

count=${#f_arr[*]}
count=$(($count-1))
for i in ${!f_arr[*]};
do
    var1=${f_arr[$i]}
    var2=${s_arr[$i]}
    var3=${u_arr[$i]}
    var4=${a_arr[$i]}
    var5=${p_arr[$i]}
    var6=${m_arr[$i]}
    echo $template |sed  "s#var1#$var1#g" | sed "s#var2#$var2#g" | sed  "s#var3#$var3#g" | sed  "s#var4#$var4#g" |  sed  "s#var5#$var5#g" | sed  "s#var6#$var6#g" >> df.json
    if [ $i -ne ${count} ];
    then
    echo \, >> df.json
    fi
done

echo ] >> df.json
    cat df.json

