package main

import (
	"strconv"
	"strings"
)

func main() {
	// for ints 1-100
	// print "A" if divisible by 3,
	// "B" if divisible by 5,
	// "AB" if divisible by 3 and 5,
	// and just the int if none of the above.
	// Format as "1, 2, A, 4, B, A, 7, 8, A, B, 11, A, 13, 14, AB, 16, 17, ..."

	// using a string concat
	var strMessage string = ""
	var div3 bool = false
	var div5 bool = false
	var div15 bool = false

	for i := 1; i < 101; i++ {

		// add a comma to everything after the first item.
		// this could also be accomplished by checking if (i > 1),
		// but since we"re manipulating the string strMessage
		//  rather than the variable i, I thought it best to check the string
		if len(strMessage) != 0 {
			strMessage = strMessage + ", "
		}
		// assign variables to simplify match
		div3 = (i%3 == 0)
		div5 = (i%5 == 0)
		div15 = (div3 && div5)

		// use a match to avoid nested if statements
		switch true {
		case (div15):
			strMessage = strMessage + "AB"
		case (div5):
			strMessage = strMessage + "B"
		case (div3):
			strMessage = strMessage + "A"
		default:
			strMessage = strMessage + strconv.Itoa(i)
		}
	}
	// print the message
	println("The output of print(strMessage) is:")
	println(strMessage)

	println("")
	println("")

	// using a collection
	// initialize slice
	slcMessage := []string{}

	for i := 1; i < 101; i++ {

		// assign variables to simplify match
		div3 = (i%3 == 0)
		div5 = (i%5 == 0)
		div15 = (div3 && div5)

		// use a match to avoid nested if statements
		switch true {
		case (div15):
			slcMessage = append(slcMessage, "AB")
		case (div5):
			slcMessage = append(slcMessage, "B")
		case (div3):
			slcMessage = append(slcMessage, "A")
		default:
			slcMessage = append(slcMessage, strconv.Itoa(i))
		}
	}

	// print the message
	println("The output of println(strings.Join(slcMessage, \", \")) is:")
	println(strings.Join(slcMessage, ", "))

}
