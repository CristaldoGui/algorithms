//sum function with recursion
let arr = [5,7,8,9]

function sum(arr) {
    if(arr.length == 0) {
        return 0
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}

console.log(sum(arr));