//lesson 11, 12
const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat(
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			);
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


const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat(
				todo(undefined, action)
			);
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
};

const testAddTodo = () => {
	const stateBefore = [];
	
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: "Learn Redux"
	};
	
	const stateAfter = [
		{
			id: 0,
			text: "Learn Redux",
			completed: false
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
};

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: "Learn Redux",
			completed: false
		},
		{
			id: 1,
			text: "Go shopping",
			completed: false
		}
	];

	const action = {
		type: 'TOGGLE_TODO',
		id: 1
	};

	deepFreeze(stateBefore);
	deepFreeze(action);

	const stateAfter = [
		{
			id: 0,
			text: "Learn Redux",
			completed: false
		},
		{
			id: 1,
			text: "Go shopping",
			completed: true
		}
	];

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
}

//testAddTodo();
testToggleTodo();
console.log("All tests passed.");