const action = () => {
    let searchData = document.getElementById('search-id').value;
const url = `https://sneakers-releases-calendar.p.rapidapi.com/search/${searchData}?sort_by=relevance&sort_order=descending&num_results_per_page=24&page=1`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f54abf491msh70444ff866ec5acp1e3271jsn35e864ddbe6d',
		'X-RapidAPI-Host': 'sneakers-releases-calendar.p.rapidapi.com'
	}
};

async function getData(){
	const response = await fetch(url, options);
	const result = await response.text();
    const realResults = JSON.parse(result);
	console.log(realResults);
}
getData();
}
