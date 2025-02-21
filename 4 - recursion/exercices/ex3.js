let list = [0]

function greaterValue(arr) {
    if(arr.length == 1)
        return arr[0]

    if(arr.length == 2) 
        return arr[0] > arr[1] ? arr[0]: arr[1];

    let greater = greaterValue(arr.slice(1));
    return arr[0] > greater ? arr[0]: greater;
}

console.log(greaterValue(list));