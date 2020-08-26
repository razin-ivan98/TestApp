const apiFetchImagesWithComments = async (id) => {
	const res = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
	const json = await res.json();
	return await json;
};

export default apiFetchImagesWithComments;
