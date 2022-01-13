let divOutput = document.getElementById('test')
let usernameField = document.getElementById('username')
let defaultUser = 'defunkt'
// Housekeeping Functions

// function usernameCheck() {
// 	if(!usernameField.value) {
// 		username = 'defunkt'
// 	} else {
// 		username = usernameField.value
// 	}
// }

// function usernameClear() {
// 	username = ""
// }

function usernameFieldClear() {
	usernameField.value = ''
}

let clearDiv = () => {
	divOutput.innerText = '';
	console.log('clear')
}

// Test Functions

let howdy = (username = defaultUser) => {
	// usernameCheck()
	divOutput.innerHTML += `Hello, I am ${username}<br/>`;
	// usernameClear();
	usernameFieldClear();
}

// API Test Functions

let file = "https://api.github.com/zen"

function test() {
	fetch(file)
	.then(x => x.text())
	.then(y => console.log(y))
}

// API Functions

let userURL = "https://api.github.com/users/"

async function getUserProfile(username = defaultUser) {
	// usernameCheck();

	// fetch(userURL + username)
	// 	.then(userURL => userURL.text())
	// 	.then(userInfo => console.log(userInfo))

	let userInfo = await fetch(userURL + username)
	let userInfoText = await userInfo.text()
	console.log(userInfoText)
	
	// usernameClear();
	usernameFieldClear();
}

async function getUserRepos(username = defaultUser) {

	let userInfo = await fetch(userURL + username + '/repos')
	let userInfoText = await userInfo.text()
	console.log(userInfoText)

	usernameFieldClear();
}

