// JS实现冒泡排序

function swap(arr,a, b) {
		let p = arr[a];
		arr[a] = arr[b];
		arr[b] = p;
}



function bubblesort(arr) {
	let p = arr.length;
	for (let i = 0; i < p; i++) {
		for(let j= 0; j < p-1-i; j++) {
			if (arr[j] >= arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}
	return arr;
}



let a = [1,232,2,5, 24,65464,3242];

let b = bubblesort(a);

console.log(b);
