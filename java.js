//sum_range
var sum = function(box){
	l=box.length;
	boxSum=0;
	for(var i=0;i<l;i++){
		boxSum += box[i];
	}
	return boxSum;
}
var range = function (start, end, step){
	if(step==undefined) step=1;
	var box=[];
	if(step < 0){
		step=-step;
		for(end;end<=start;step){
			box.push(end);
			end+=step;
		}
	}
	else{
		for(start;start<=end;step){
			box.push(start);
			start+=step;
		}
}
return box;
}
//reverse_array
function reverseArray(array){
	var newArray=[];
	for (var i = array.length - 1; i >= 0; i--) {
		b=array.pop();
		newArray.push(b);
	}
	return newArray;
}
function reverseArrayInPlace(array){
	index =array.length/2;
	index = Math.floor(index);
	last = array.length-1;
	
	for(var i=0;i<=index; i++){
		a=array[i];
		b=array[last-i];
		array[i]=b;
		array[last-i]=a;
		
	}
	return array;
}
