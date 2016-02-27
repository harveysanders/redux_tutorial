'use strict';

var addCounter = function addCounter(list) {

	return list.concat([0]);
};

var removeCounter = function removeCounter(list, index) {
	return list.slice(0, index).concat(list.slice(index + 1));
};

var incrementCounter = function incrementCounter(list, index) {
	return list.slice(0, index).concat([list[index]] + 1).concat(list.slice(index + 1));
};

// -----------tests

var testAddCounter = function testAddCounter() {
	var listBefore = [];
	var listAfter = [0];

	deepFreeze(listBefore);

	expect(addCounter(listBefore)).toEqual(listAfter);
};

var testRemoveCounter = function testRemoveCounter() {
	var listBefore = [0, 10, 20];
	var listAfter = [0, 20];

	deepFreeze(listBefore);

	expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

var testIncrementCounter = function testIncrementCounter() {
	var listBefore = [0, 10, 20];
	var listAfter = [0, 11, 20];

	deepFreeze(listBefore);

	expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();

console.log('All tests passed.');