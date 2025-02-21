let arr = [9,8,7,6,5,4,3,2,1]

function quicksort(arr) {
    if(arr.length < 2){
        return arr
    } 
    else {
        let pivo = arr[0];
        arr.shift();
        let maiores = [];
        let menores = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < pivo){
                menores.push(arr[i]);
            } else {
                maiores.push(arr[i]);
            } 
        }

        return quicksort(menores).concat(pivo, quicksort(maiores)) 
    }
}

console.log(quicksort(arr));