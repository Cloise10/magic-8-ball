input.onGesture(Gesture.Shake, function () {
    number = randint(0, 2)
    if (number == 2) {
        basic.showString("YES")
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (number == 1) {
        basic.showString("NO")
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showString("MAYBE")
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.clearScreen()
    }
})
let number = 0
basic.showString("Ask a Question")
