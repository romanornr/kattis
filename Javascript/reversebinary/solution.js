var line = readline();

line = (line >>> 0).toString(2);
reverse = line.split('').reverse().join('');
answer = parseInt(reverse, 2)
print(answer);