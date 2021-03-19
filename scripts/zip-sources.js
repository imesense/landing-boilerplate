const { exec } = require('child_process');

const date = new Date();
exec(`rm ./out/sources-*.zip`)
exec(`git archive --format=zip HEAD -o ./out/sources-${`0${date.getDate()}`.slice(-2)}${`0${date.getMonth() + 1}`.slice(-2)}${date.getFullYear()}.zip`);

console.log('Archive with sources was created successfully!');
