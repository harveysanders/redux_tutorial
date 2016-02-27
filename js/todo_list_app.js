'use strict';

//lesson 11, 12
var todo = function todo(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat({
				id: action.id,
				text: action.text,
				completed: false
			});
		case 'TOGGLE_TODO':
			//state is indivual todo in this case
			if (state.id !== action.id) {
				return state;
			} else {
				return Object.assign({}, state, {
					completed: !state.completed
				});
			}
		default:
			return state;
	}
};

var todos = function todos() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_TODO':
			return state.concat(todo(undefined, action));
		case 'TOGGLE_TODO':
			return state.map(function (t) {
				return todo(t, action);
			});
		default:
			return state;
	}
};

var testAddTodo = function testAddTodo() {
	var stateBefore = [];

	var action = {
		type: 'ADD_TODO',
		id: 0,
		text: "Learn Redux"
	};

	var stateAfter = [{
		id: 0,
		text: "Learn Redux",
		completed: false
	}];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(todos(stateBefore, action)).toEqual(stateAfter);
};

var testToggleTodo = function testToggleTodo() {
	var stateBefore = [{
		id: 0,
		text: "Learn Redux",
		completed: false
	}, {
		id: 1,
		text: "Go shopping",
		completed: false
	}];

	var action = {
		type: 'TOGGLE_TODO',
		id: 1
	};

	deepFreeze(stateBefore);
	deepFreeze(action);

	var stateAfter = [{
		id: 0,
		text: "Learn Redux",
		completed: false
	}, {
		id: 1,
		text: "Go shopping",
		completed: true
	}];

	expect(todos(stateBefore, action)).toEqual(stateAfter);
};

//testAddTodo();
testToggleTodo();
console.log("All tests passed.");