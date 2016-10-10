var lines = readline();
var answer = [];

while(lines = readline()){
	if(lines % 2 === 0){
		answer.push(lines+' is even')
	}else{
		answer.push(lines+' is odd')
	}
	print(answer), answer = [];
}