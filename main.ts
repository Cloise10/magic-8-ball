// on shake, a random number between 0 and 2 are picked
// 
// if 2 is picked, answer is yes w/ a check mark to show
// 
// if 1 is picked, answer is no w/ an x mark to show
// 
// if neither 1 nor 2 are picked, answer is maybe with question mark to show
input.onGesture(Gesture.Shake, function () {
    number = randint(0, 2)
    if (number == 2) {
        basic.showString("YES")
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 1) {
        basic.showString("NO")
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showString("MAYBE")
        basic.showLeds(`
            . . # # .
            . # . . #
            . . . # .
            . . . . .
            . . . # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
// on start, shows 8 to identify the game "Magic 8 Ball" and shows string "Ask a Question" as instruction the the user
let number = 0
basic.showLeds(`
    # # # # #
    # . . . #
    . # # # .
    # . . . #
    # # # # #
    `)
basic.pause(200)
basic.clearScreen()
basic.showString("Ask a Question")
basic.pause(200)
basic.clearScreen()
