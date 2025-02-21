let list = [1,2,3,4,5,6,7,8,9]

function countItensList(arr) {
    if(arr.length == 0) {
        return 0
    } else {
        return 1 + countItensList(arr.slice(0, -1))
    }
}

console.log(countItensList(list))