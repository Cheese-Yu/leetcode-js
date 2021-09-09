const fs = require('fs');

const co = function (fn, ...args) {
    return new Promise((resolve, reject) => {
        fn(...args, (err, data) => {
            if (err) {
                reject(err)
            }

            resolve(data)
        });
    })
}

const title = '# ✏️LeetCode 刷题备录\n';
const ignore = ['.git']
const build = async () => {
    let result = title;
    const dirObj = {};
    const list = await co(fs.readdir, __dirname);

    for (let dir of list) {
        let problems = [];
        if (ignore.includes(dir)) continue;
        const stats = await co(fs.stat, dir)
        if (!stats.isDirectory()) continue;

        const _problems = await co(fs.readdir, dir);
        if (!_problems.length) continue;

        // 排序
        _problems.sort((a, b) => a.split('_')[0] - b.split('_')[0])
        // 大写字母前插入空格
        problems = _problems.map(el => {
            const names = el.replace('.js', '').split('_');
            return `- [x] ${names[0]}. ${names[1].replace(/(?=(?!^)[A-Z])/g, ' ')}  \n`
        })

        dirObj[dir] = problems;
    }

    for (let i in dirObj) {
        const text = dirObj[i].join('');
        result = result + `\n### ${i}\n` + text;
    }

    await co(fs.writeFile, 'README.md', result);
    console.log('[ build > ]Update README.md Success !')
};

build();
