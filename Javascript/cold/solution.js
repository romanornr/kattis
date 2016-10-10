var lines = readline();
var count = 0;

while(lines = readline()){
	if (lines.length > 1) {
		var nums = lines.split(" ");
		for (var i = 0; i < nums.length; i++) {
			cold = parseInt(nums[i]);
			if(cold < 0) count++;
		}
	}
	print(count);
}