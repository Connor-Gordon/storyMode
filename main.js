var name = prompt("Whats your name")

game() 

function game() {
	let choice1 = prompt("Hello " + name + ", you wake up in a bathtub full of ice with one of your kidneys removed. You try to remember what happened last night but it's too blurry, and your bleeding a lot so you know your only hope of surviving is to get out. You hear a tv on outside the bathroom but don’t hear anyone out there, so you try the door but its locked from the outside. Look around and you see theres a loose towel bar on the wall, some bobby pins. Do you try to pick the lock with the bobby pins, or attempt to break the handle with the towel bar? Type 'bobby pins' or 'towel bar'.") 

	if(choice1 === "bobby pins") {
		let choiceTwo = prompt("So glad those youtube videos on lock-picking payed off! You quietly open the door and see an empty room with Jeopardy on the tv, you quietly answer George Foreman to yourself and walk towards the hallway. The hallway has a door on either side, you put your ear to both doors, and hear what sounds like German war plans to the right, and what sounds like loud animal growls to the left. Type ‘right’ or ‘left” to choose a direction.")
		if(choiceTwo === "right") {
			let choiceThree = prompt("You chose right! You walk into what seems to be a war room with 20+ German soldiers, you quickly realize this is an underground Nazi base and they stole your kidneys to replace cyborg hitlers’ failing set. They give you a choice, join and bring the 3rd reich back to power, or die? Type 'join' or 'die'.")
			if(choiceThree === "join") {
				alert("You choose to join! They adopt you as one of their own, eventually you rise through the ranks to become the new cyborg hitler and you put some poor Joe Shmoe in the same exact place you just were to replace your missing kidney. It's a win but not really.")
			} else {
				alert("You have too much honor and you choose to die! And guess what they shoot you in the other kidney and you do, in fact, end up dying. Obviously you lost the game.")
			}
		}
		else {
			alert("You walk into the left rooms and see it was a bunch of sad caged puppies growling the whole time. Seems like this is puppy mill but you don’t have time to ask questions, you see a door straight outside so you open all the cages and run out the door with the puppies. Your’e free, you saved all the puppies, and you find your way to a hospital and survive! Good job you win!")
		}

	}
	else {
		let choiceTwo = prompt("It works! That was a strong bar and it breaks the door handle, but you made a lot of noise and as you walk out, 3 large German men walk in and tackle you. You wake up back in the bathroom with a new electronic lock. You can try a few 4 digit codes but you have no idea what they would set it to?")
		if(choiceTwo === "9999") {
			let choiceThree = prompt("Holy Wiston Churchill! It worked and the door opened, you slowly walk out and don't see any guards, do you try to make a break for it? Type 'yes' or 'no'")
			if(choiceThree === "yes") {
				alert("Sweet freedom! You notice a cracked window and jump through it without a second thought. Turns out the house sits on a cliff and you wonder how you got here in the first place as you fall to your death.")
			}
			else {
				alert("Why didn't you try to run, they come back and just change the code.")
			}
		} else {
			alert("You're stuck in here forever I guess...")
		}

	}
}