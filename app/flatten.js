
function containsArray(array){

    for(var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            return true;
        }
    }

    return false;
}


function flattenArray(array) {

    console.log("Array passed in: ", array);

    for (var i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {

            if(containsArray(array[i])){
                array[i] = flattenArray(array[i]);
            }

            //get array item in array
            var item = array[i];

            //remove nested array item in initial array
            array.splice(i, 1);

            //get initial array front
            var arrayFront = array.slice(0, i);

            //get initial array back
            var arrayBack = array.slice(i);

            //concat all array elements in correct order to create flattened array
            var newArray = arrayFront.concat(item).concat(arrayBack);

            array = newArray;

        }

    }

    return array;

}

var array = [1, [[71,[22]], 9], 3, [1, 4]];

containsArray(array);

var result = flattenArray(array);

console.log("Array flatten result: ", result);

