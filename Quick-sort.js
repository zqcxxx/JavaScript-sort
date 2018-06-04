// JS实现快速排序
//两头交换实现
function swap(arr,a, b) {
		let p = arr[a];
		arr[a] = arr[b];
		arr[b] = p;
}

function quicksort(arr, left, right) {
	if (left >= right) return;
	let i = left,
		j = right,
		m = parseInt((i+j)*0.5),
		x = arr[m];
		while (i <= j) {
			while (arr[i] < x) {
				i++;
			}
			while (arr[j] > x) {
				j--;
			}
			if (i <= j) {
				swap(arr, i, j);
				i++;
				j--;
			}
			quicksort(arr, left, j);
			quicksort(arr, i, right);
		}	
}

var a = [8,6,3,9,1,2,4];

quicksort(a, 0, 6);

console.log(a);



// function quickSort(arr, left, right) {
//     var len = arr.length,
//         partitionIndex,
//         left = typeof left != 'number' ? 0 : left,
//         right = typeof right != 'number' ? len - 1 : right;

//     if (left < right) {
//         partitionIndex = partition(arr, left, right);
//         quickSort(arr, left, partitionIndex-1);
//         quickSort(arr, partitionIndex+1, right);
//     }
//     return arr;
// }

// function partition(arr, left ,right) {     //分区操作
//     var pivot = left,                      //设定基准值（pivot）
//         index = pivot + 1;
//     for (var i = index; i <= right; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }        
//     }
//     swap(arr, pivot, index - 1);
//     return index-1;
// }

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

