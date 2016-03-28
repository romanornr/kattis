var line; 
var temp = [];

var show = function(map){
	print(Object.keys(map).length);
}


while(line = readline()){
	if(!parseInt(line)) temp.push(line);
		var map = temp.reduce(function(prev, cur) {
  		prev[cur] = (prev[cur] || 0) + 1;
  		return prev;
	}, {});
	if(parseInt(line)){
		if(Object.keys(map).length > 0) print(Object.keys(map).length);
		temp = [];
	}
}
print(Object.keys(map).length);

