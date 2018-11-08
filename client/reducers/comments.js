// A reducer takes in two things:

// 1. The action (info about what happend)
// 2. Copy of the current state

export default function comments(state = [], action) {
	console.log(state, action);
	return state;
}