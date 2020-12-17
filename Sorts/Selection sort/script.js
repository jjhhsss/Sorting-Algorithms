function selectionSort (arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([0,2,34,22,10,19,17]));