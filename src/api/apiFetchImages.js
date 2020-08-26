async function apiFetchImages() {
	const res = await fetch("https://boiling-refuge-66454.herokuapp.com/images");
	const json = await res.json();
	return await json;
};

export default apiFetchImages;
