'use strict';

var addCounter = function addCounter(list) {
	list.push(0);
	return list;
};

var testAddCounter = function testAddCounter() {
	var listBefore = [];
	var listAfter = [0];
	expect(addCounter(listBefore)).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed.');
'use strict';

var _Redux = Redux;
var createStore = _Redux.createStore;

var test = 32;
console.log(test);

var counter = function counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

var Counter = function Counter(_ref) {
	var value = _ref.value;
	var onIncrement = _ref.onIncrement;
	var onDecrement = _ref.onDecrement;
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			value
		),
		React.createElement(
			'button',
			{ onClick: onIncrement },
			'+'
		),
		React.createElement(
			'button',
			{ onClick: onDecrement },
			'-'
		)
	);
};

var store = createStore(counter);

console.log('state:' + store.getState());

var render = function render() {
	ReactDOM.render(React.createElement(Counter, {
		value: store.getState(),
		onIncrement: function onIncrement() {
			return store.dispatch({
				type: 'INCREMENT'
			});
		},
		onDecrement: function onDecrement() {
			return store.dispatch({
				type: 'DECREMENT'
			});
		}
	}), document.getElementById('root'));
};

store.subscribe(render);
render();
