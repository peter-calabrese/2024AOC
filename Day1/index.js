const fs = require('fs');
fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);
  const lines = data.trim().split('\n');

  const list1 = [];
  const list2 = [];

  for (const line of lines) {
    const [num1, num2] = line.split(/\s+/).map(Number);
    list1.push(num1);
    list2.push(num2);
  }
  console.log(`Day 1 Answer: ${distance(list1, list2)}`);
});

function distance(list1, list2) {
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < list1.length; i++) {
    ans += Math.max(list1[i], list2[i]) - Math.min(list1[i], list2[i]);
  }
  return ans;
}
