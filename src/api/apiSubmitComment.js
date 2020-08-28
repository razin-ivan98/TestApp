async function apiSubmitComment(comment) {
	const body = {
		text: comment.text,
		author: comment.author,
	};
	
	const res = await fetch(
		`https://boiling-refuge-66454.herokuapp.com/images/${comment.imageId}/comments`,
		{
			method: "POST",
			headers: {
				'Content-Type': 'multipart/form-data;'
			},
			body: JSON.stringify(body),
		},
	);
	if (res.status !== 204) {
		throw new Error(res.status);
	}
};

export default apiSubmitComment;
