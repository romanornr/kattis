var line;
var temp = [];

while(line = readline()){
	var nums = line.split(" ");
	for (var i = 1; i < nums.length; i++) {
		temp.push(parseInt(nums[i]));
	}

	// for (var i = 0; i < temp.length; i++) {
		
	// }
}

var filter = temp.filter(el => temp.indexOf(el) === temp.lastIndexOf(el));
var answer = Math.max.apply(Math, filter);
if(answer ==  '-Infinity'){
	print('none');
}else{
	print(answer);
}
// function big(temp){
// print(Math.max(temp));
	
// }
// // var filter = temp.filter(big);
// // print(temp.filter(big))