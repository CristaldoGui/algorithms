
function binarySearch(arr, element, min, max) {
    if(min > max) return -1
    
    let quit = Math.floor((min + max) / 2);

    if(element === arr[quit]) {
        return  arr[quit];
    }
    
    if(element < arr[quit]) {
        max = quit - 1;
    } else {
        min = quit + 1;
    }

    return binarySearch(arr, element, min, max)
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log(binarySearch(arr, 6 , 0, arr.length - 1))

