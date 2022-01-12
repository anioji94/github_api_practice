let divOutput = document.getElementById('test')
let name = document.getElementById('name')

fetch('https://api.github.com/users/anioji94')
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => document.body.append())
		.catch( error => console.error(error));

console.log(divOutput)
let howdy = () => {
	if(!name.value){
		input = 'Ani'
	} else {
		input = name.value
	}
	divOutput.innerHTML += `Hello, I am ${input}<br/>`;
	name.value = '';
}

let clearDiv = () => {
	divOutput.innerText = '';
	console.log('clear')
}

