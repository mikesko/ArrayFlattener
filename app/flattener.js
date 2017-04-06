exports.flatten = function(array){

	if(checkForNestedArrays(array)){
		return flattenArray(array);
	}

	return array;

}

var flattenArray = function(array){

	for(var i=0; i < array.length; i++){

		if(Array.isArray(array[i])){

			if(checkForNestedArrays(array)){
				array[i] = flattenArray(array[i]);
			}	

			var shouldntBeAnArray = array[i];
			
			array.splice(i, 1);

			var arrayFront = array.slice(0, i);

			var arrayBack = array.slice(i);

			var newArray = arrayFront.concat(shouldntBeAnArray).concat(arrayBack);

			array = newArray;			

		}

	}

	return array;

}

var checkForNestedArrays = function(array){

	for (var i = array.length - 1; i >= 0; i--) {
		if(Array.isArray(array[i])){
			return true;
		}
	}

	return false;

}