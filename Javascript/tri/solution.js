var lines = readline();
var answer = [];

var nums = lines[1,2,3];
var temp = [];

var plus = '+';
var minus = '-';
var devide = '/';
var is = '=';

console.log(nums[0]+nums[1] == nums[3])
if(nums[3] == nums[0]+nums[1]){
	console.log('hi')
	//console.log(nums[0] plus nums[1] is nums[3]);
}

if(nums[0] == nums[1] / nums[3]){
	console.log('yes')
}