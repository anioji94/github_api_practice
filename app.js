let divOutput = document.getElementById('test')
let name = document.getElementById('name')

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

