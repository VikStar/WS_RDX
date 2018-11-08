// increment likes
export function increment(i) {
	return {
		type: "INCREMENT_LIKES",
		i
	};
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: "ADD_COMMENT",
		postId,
		author,
		comment
	};
}

// remove comment
export function removeComment(postId, i) {
	return {
		type: "REMOVE_COMMENT",
		i,
		postId
	};
}