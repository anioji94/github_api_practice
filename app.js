let divOutput = document.getElementById('test')
let usernameField = document.getElementById('username')

function usernameCheck() {
	if(!usernameField.value) {
		username = 'defunkt'
	} else {
		username = usernameField.value
	}
}

// let username = usernameField.value

function usernameClear() {
	username = ""
}

let howdy = () => {
	usernameCheck()
	divOutput.innerHTML += `Hello, I am ${username}<br/>`;
	usernameClear();
}

let clearDiv = () => {
	divOutput.innerText = '';
	console.log('clear')
}

let file = "https://api.github.com/zen"

function test() {
	fetch(file)
	.then(x => x.text())
	.then(y => console.log(y))
}

let userURL = "https://api.github.com/users/"

function getUserProfile() {
	usernameCheck();

	fetch(userURL + username)
		.then(userURL => userURL.text())
		.then(userInfo => console.log(userInfo))
	
	usernameClear()
}

