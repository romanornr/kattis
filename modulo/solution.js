var line;
var distinctions = [];
while(line = readline()) {
	if (distinctions.indexOf(line % 42) == -1) distinctions.push(line % 42);
}

print(distinctions.length);