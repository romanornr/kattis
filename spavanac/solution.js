var hour = [];
var minutes = [];
while(lines = readline()){
var time = lines.split(' ');
hour.push(time[0]);
minutes.push(time[1]);

if(minutes - 45 < 0){
	var hour = hour - 1;
	var minutes = (60 + minutes - 45) % 60;
}else{
	var minutes = minutes - 45;
}
if(hour < 0){
var hour = 23;
}

 }
print(hour+' '+minutes);