const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]

let outputOne = document.getElementById("output1")
let outputTwo = document.getElementById("output2")
let useNumbers = document.getElementById("use-numbers") 
let useSymbols = document.getElementById("use-symbols") 
let generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", generatepw)

function getRandom(character) {

	const randomCharacter = Math.floor(Math.random() * character.length)
	return character[randomCharacter]
}

//"pw" signifies "password"
function createpw() {
	let password =""
	let characterPool = letters

	if (useNumbers.checked) {
		characterPool = characterPool.concat(numbers)
	}
	if (useSymbols.checked) {
		characterPool = characterPool.concat(symbols)
	}

	for (let i= 0; i < 16; i++) {
	password += getRandom(characterPool)
 	}
 	return password
}

function addCopyFeatures(output) {
	if (!output.classList.contains("output-hover")){
		output.classList.add("output-hover")
		output.addEventListener("click", function () {
			copyText(this)
		})
		output.addEventListener("keydown", function (event) {
			if (event.key === "Enter" || event.key === " ") {
				copyText(this)
			}
		})
	}
}

function generatepw() {
	outputOne.textContent = createpw()
	outputTwo.textContent = createpw()
	addCopyFeatures(outputOne)
	addCopyFeatures(outputTwo)
}

function copyText(generatedPassword) {
	let copiedText = generatedPassword.textContent
	if (copiedText.length > 2) {
		navigator.clipboard.writeText(copiedText)
		.then(() => {
			generatedPassword.textContent = "Copied!"
            setTimeout(() => {
                generatedPassword.textContent = copiedText
            }, 1000)
		})
		.catch(() => {
			console.error('Failed to copy text.')
			alert(`Failed to copy the password. Please try again!`)
		})
	}
}
