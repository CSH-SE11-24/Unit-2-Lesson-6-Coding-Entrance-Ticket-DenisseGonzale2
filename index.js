// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let number= "4"

// Prompt the user to guess the number
let guessNum= prompt("Guess a number from 1- 100")

// Cast the user input to a number
parseInt(guessNum)

// Create a new variable called attempts and set it to 0
attempts=0

// Create a while loop that runs while the user guess is not equal to your number
while(guessNum !==number){
	 guessNum =prompt("Nope guess again")
	 attempts++
}if(guessNum< number){
	console.log("too high")
}else if(guessNum > number){
	console.log("too low")
}else if(guessNum== number){
 console.log("You got it!")
}else{
	console.log("that isn't a number!")
}

// In the while loop, prompt the user to guess the number again (remember to cast)


// In the while loop, increase the attempts by 1


// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 

console.log("It took " + attempts + " attempts")