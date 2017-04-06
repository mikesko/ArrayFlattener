var assert = require('assert');
var flattener = require('../app/flattener.js');

describe('flattener.js ',function(){

	it('flatten() should return the same array passed in if flat', function(){

		var expected = ['a','b','c','d'];

		var actual = flattener.flatten(expected);

		checkArrayEquality(expected, actual);

	});

	it('flatten() should not return an unflattened array 1 level deep', function(){

		var input = ['a', ['b'], 'c', 'd'];
		var expected = ['a', 'b', 'c', 'd'];

		var actual = flattener.flatten(input);

		checkArrayEquality(expected, actual);

	});

	it('flatten() should not return an unflattened array multiple level deep', function(){

		var input = ['a', [['b'], 'c'], 'd', 'e'];
		var expected = ['a', 'b', 'c', 'd', 'e'];

		var actual = flattener.flatten(input);

		checkArrayEquality(expected, actual);

	});

	it('flatten() should not return an unflattened array; first index multiple level deep', function(){

		var input = [[[['a'], '4'], 'b'], 'c', 'd', 'e'];
		var expected = ['a', '4', 'b', 'c', 'd', 'e'];

		var actual = flattener.flatten(input);

		checkArrayEquality(expected, actual);

	});

	it('flatten() should not return an unflattened array; last index multiple level deep', function(){

		var input = ['a', 'b', 'c', ['d', ['3', ['e']]]];
		var expected = ['a', 'b', 'c', 'd', '3', 'e'];

		var actual = flattener.flatten(input);

		checkArrayEquality(expected, actual);

	});

	it('flatten() should not return an unflattened array; multiple elements are arrays', function(){

		var input = [['a', ['2']], 'b', ['c', ['d']], 'e'];
		var expected = ['a', '2', 'b', 'c', 'd', 'e'];

		var actual = flattener.flatten(input);

		checkArrayEquality(expected, actual);

	});


});

var checkArrayEquality = function(expected, actual){

	assert.equal(expected.length, actual.length);

	for(var i=0; i < expected.length; i++){
		assert.deepEqual(expected[i], actual[i], 'Array element is the same');
	}

	console.log("expected: ", expected);
	console.log("actual: ", actual);

}