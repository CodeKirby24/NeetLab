function Sortie(arr){
    for(let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > current; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current;
        console.log(arr)
    }
    return arr;
}

console.log(Sortie([3,6,2,1,5,4]));