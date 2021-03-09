input.onGesture(Gesture.Shake, function () {
    // sets number to randomly pick 0 to 2
    number = randint(0, 2)
    if (number == 2) {
        // if number is 2, the answer is YES
        basic.showString("YES")
        // Check mark represents YES
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 1) {
        // if number is 1, the answer is NO
        basic.showString("NO")
        // cross represents NO
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else {
        // if number is neither 1 nor 2, answer is MAYBE
        basic.showString("MAYBE")
        // poker face (?) represents MAYBE
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.clearScreen()
    }
})
// The start of the Magic 8 Ball
let number = 0
basic.showString("Ask a Question")
