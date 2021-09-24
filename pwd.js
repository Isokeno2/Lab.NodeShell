const fs = require('fs');
process.stdout.write ('prompt > ');

process.stdin.on ('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'pwd'){
    process.stdin.write(process.cwd());
  } else if (cmd === 'ls') {
    fs.readdir('./', 'utf8',(err, files) => {
      if (err){
        throw err
      } else {
        process.stdout.write(files.join('\n'))
        process.stdout.write("prompt > ");
      }
    })
  }

  process.stdout.write('\nprompt > ');
})


module.exports = function () {
  process.stdin.write(process.cwd());
  process.stdout.write('\nprompt > ');
};

// const anotherGreeting = require("./bash")
// console.log(anotherGreeting)
