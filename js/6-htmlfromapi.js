// Convert API data to HTML (API: https://rickandmortyapi.com/api/character/)
// The API returns a list of Rick and Morty characters.

// 1. View the API in your browser to see the data you will recieve.

fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => {
    var myJSON = response.json();
    return myJSON
  })
  .then((data) => {
  	console.log(data.results)

    var htmlString = data.results
    	.filter(char => char.status === "Alive")
    	.map(convertToHtml)
    	.join("")

    document.body.innerHTML += htmlString;
  });
function convertToHtml(data) {
	return `
		<div>
			<img src="${data.image}" alt="data.name" />
			<p>Character ID: ${data.id}</p>
			<h3>Name: ${data.name}</h3>
			<p>Character Species: ${data.species}</p>
			<p>Status : ${data.status}</p>
		</div>
	`
};

//    The API returns and object with a property called results.  Results is an array of characters.
// 2. Look at the properties/data on each character.
// 3. Create a function called renderCharacter that will take in one of the character objects.
//    The function will return an HTML string that contains the characters: id, name, species and image.
//    The function will be used when mapping through the API response.
//    You can test the function works by copying one of the API results into a variable and calling the function with it.
// 4. Use fetch to connect to the API and get the JSON.
// 5. On the JSON response, use array.map on the 'results' arrays.
//    Use the renderCharacter function for mapping the data to HTML.
// 6. Output the mapped HTML in the browser.
// 
// 7. BONUS TASK - use array.filter to only show characters that are alive.

/*fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => {
    var myJSON = response.json();
    return myJSON
  })
  .then((data) => {
    convertToHtml(data.results);
    var htmlString = data.results.filter(char => char.status == "Alive").join("")
    document.body.innerHTML += htmlString;
  });
function convertToHtml(data) {
	return `
		<div>
			<img src="${data.image}" alt="data.name" />
			<p>Character ID: ${data.id}</p>
			<h3>Name: ${data.name}</h3>
			<p>Character Species: ${data.species}</p>
			<p>Status : ${data.status}</p>
		</div>
	`
};
*/


