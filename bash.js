process.stdout.write ('prompt > ');

process.stdin.on ('data', (data) => {
  const cmd = data.toString().trim();

  process.stdin.write(process.cwd());
  process.stdout.write('\nprompt > ');
})
