let divOutput = document.getElementById('test')

fetch('https://api.github.com/users/anioji94')
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => document.body.append())
		.catch( error => console.error(error));

console.log(divOutput)
	let howdy = (input = "Ani") => {
		divOutput.innerHTML += `Hello, I am ${input}`;
	}