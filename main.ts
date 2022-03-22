input.onButtonPressed(Button.A, function () {
    basic.showString("x")
    if (Balls > 4) {
        Balls = 4
        basic.showNumber(Balls)
    }
    if (Balls < 4) {
        Balls += 1
    }
    basic.showNumber(Balls)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("x")
    basic.showNumber(Balls)
    basic.showString("y")
    basic.showNumber(Strikes)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("y")
    if (Strikes > 3) {
        Strikes = 3
        basic.showNumber(Strikes)
    }
    if (Strikes < 3) {
        Strikes += 1
        basic.showNumber(Strikes)
    }
    basic.showNumber(Strikes)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("x")
    Balls = 0
    basic.showNumber(Balls)
    basic.showString("y")
    Strikes = 0
    basic.showNumber(Strikes)
    basic.clearScreen()
})
let Strikes = 0
let Balls = 0
basic.showString("x=#balls")
basic.showNumber(Balls)
basic.showString("y=#strikes")
basic.showNumber(Strikes)
basic.showLeds(`
    # # # # #
    # . . . #
    . # . # .
    # . . . #
    # # # # #
    `)
