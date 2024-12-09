const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);
  const arr = data.split('\n');
  console.log(arr);
});
