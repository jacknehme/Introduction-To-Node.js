// Sample inspired by http://nodejs.org/api/child_process.html

var spawn = require('child_process').spawn;
var ps = spawn('ps', ['ax']);
var grep = spawn('grep', ['node']);

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', function(data) {
    console.log('ps stderr: ' + data);
});

grep.stderr.on('data', function(data) {
    console.log('grep stderr: ' + data);
});