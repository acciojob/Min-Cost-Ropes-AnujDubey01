function mincost(arr)
{ 
//write your code here
// return the min cost
	if (arr.length <= 1) return 0;
	   // Create a min-heap from the array
    let min_heap = arr.slice(); // Create a copy of the array
    min_heap.sort((a, b) => a - b); // Sort to simulate a min-heap

	let totalCost = 0; 

	while (min_heap.length > 1){
			let first  = min_heap.shift();
			let second  = min_heap.shift();

		let cost  = first + second;
		totalCost += cost ;

		min_heap.push(cost);
		min_heap.sort((a,b) => a-b );
	}
	return totalCost;
}

module.exports=mincost;
