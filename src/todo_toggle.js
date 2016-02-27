const toggleTodo = (todo) => {
	
	//mutation --bad!
	// todo.completed = !todo.completed;
	// return todo;

	//Object.assign is ES6 only!! use polyfill
	return Object.assign({}, todo, {
		completed: !todo.completed //will overwrite orig prop
	});
};

const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: "Learn Redux",
		completed: false
	};

	const todoAfter = {
		id: 0,
		text: "Learn Redux",
		completed: true
	};

	deepFreeze(todoBefore);

	expect(
		toggleTodo(todoBefore)
	).toEqual(todoAfter);
}

testToggleTodo()

console.log("All tests passed.");