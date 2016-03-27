var line;
var speed  = [];
var time = [];

function calc(speed, time) {
var answer = [];
var elapsed = [];

elapsed.push(time[0]);
for (var i = 0; i < time.length -1; i++) {
	if(time[i] < 0) break;
	elapsed.push(time[i+1] - time[i]);
}
for (var i = 0; i < speed.length; i++) {
	if(speed[i] < 0) break;
	for (var i = 0; i < elapsed.length; i++) {
		answer.push(elapsed[i] * speed[i]);
	}
}
if(answer.length > 0) print((answer.reduce((curr, prev) => curr + prev)+ ' miles'));
};

while (line = readline()) {
    var nums = line.split(' ');
    if(nums.length > 1) speed.push(parseInt(nums[0]));
    if(nums.length > 1) time.push(parseInt(nums[1]));
	if(nums.length < 2){
		calc(speed, time);
		var speed  = [];
		var time = [];
	}
	if (line < 0) break;
}