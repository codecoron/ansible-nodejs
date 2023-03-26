//华为机试，牛客搜索垃圾短信
// const arr = [
//     [1, 2]
//     , [1, 3]
//     , [1, 4]
//     , [1, 5]
//     , [1, 6]
//     , [1, 7]
//     , [1, 8]
//     , [1, 9]
//     , [1, 10],
//     [1, 11],
//     [1, 12],
//     [1, 13],
//     [1, 14],
//     [14, 1],
//     [1, 15],
// ]

const arr = [
    [1, 2]
    , [1, 3]
    , [2, 4]
    , [3, 5]
    , [4, 6]
    , [1, 4]
    , [1, 2]
    , [1, 3]
    , [1, 10],
    [1, 11],
    [1, 12],
    [1, 13],
    [1, 14],
    [14, 1],
    [1, 15],
]

const Id = 1
function getLM(arr, id) {
    let send = {};
    let get = {};
    let L = 0, M = 0, asend = 0;
    let flag = false;
    arr.forEach(item => {
        if (item[0] === 1) {
            asend++;
            if (!send[item[1]]) send[item[1]] = 0;
            send[item[1]]++;
        } else {
            if (item[1] === 1) {
                M++;
                if (!get[item[0]]) get[item[0]] = 0;
                get[item[0]]++;
            }
        }
    })
    if ((asend - M) > 10) {
        flag = true;
    }
    console.log(send, get)
    for (let key in send) {
        console.log(key, send[key], key in get)
        if (key in get) {
            if ((send[key] - get[key]) > 5) {
                flag = true;
            }
        } else {
            L++;
        }
    }
    if (L > 5) flag = true;
    M = asend - M;
    console.log('' + flag + ' ' + L + ' ' + M);
}

getLM(arr, Id)