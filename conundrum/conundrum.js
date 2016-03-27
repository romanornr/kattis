var word = readline();
var name = 'PER'
var count = 0;
for (var i = word.length - 1; i >= 0; i--) {
	if(word[i] != name[i % 3]){
		count += 1
	}
}
print(count);
console.log(count);
