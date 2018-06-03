//JS 实现直接插入排序

function insertsort(arr) {
	let p = arr.length;
	for(let i = 1; i < p; i++){
		let j = i;
		//把要插入的值存在q中
		let q = arr[j];
		//从后向前进行比较
		while (q < arr[j-1] && j >= 0) {
			arr[j] = arr[j-1];
			j--;
		}
		arr[j] = q;
	}
	return arr;
}


var a = [1,34,352,2,44,2];

var b = insertsort(a);

console.log(b);