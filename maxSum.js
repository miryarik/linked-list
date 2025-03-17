arr = [-2,1,-3,4,-1,2,1,-5,4];

function maxSum(arr) {

    // keep first as max in case there is only one element
    let max = arr[0];

    // running sum init with 0
    let sum = 0;

    // iterate over the entire array
    for (let i = 0; i < arr.length; i++) {
        
        // calculate running sum upto current
        sum += arr[i];

        // extend the subarray to right
        // by assigning new max using current element
        if (sum > max) max = sum;

        // remove the left part of subarray if less than 0
        // by reassigning sum to 0
        if (sum < 0) sum = 0;
    }

    return max;
}

console.log(maxSum(arr))