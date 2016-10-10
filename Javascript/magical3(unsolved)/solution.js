var answer = [];
var magic = /[3]$/g;

while(line = readline()){

if(line <= 0) break;
if(line <= 2) answer.push("No such base");
if(line %4 == 0){
	var line = line / 4;

	for(var i = 3; i < 1000; i++)
	{
		line * i;
	 	if(line.match(magic)){
			answer.push(i);
			break;
		}
	 }
}

for (var i = 2; i < 37; i++) {
	var base = (line >>> 0).toString(i);
 	if(base.match(magic)){
 		answer.push(line + " "+i);
 		break;}
 	}
}


for (var i = 0; i < answer.length; i++) {
	print(answer[i])
}