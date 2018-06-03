// 用JS实现选择排序

function swap(arr, a, b) {
	let p = arr[a];
	arr[a] = arr[b];
	arr[b] = p;
}


function selectionsort(arr) {
	for(let i = 0; i < arr.length - 1; i++){
		let p = i;
		for(let j = i; j < arr.length; j++){
			if (arr[j] < arr[p]) {
				p = j;
			}
		}
		swap(arr, i, p);
	}
	return arr;
}


let arr = [213,3,657,3,5,22,44,4];


console.log(selectionsort(arr));
