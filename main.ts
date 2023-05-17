input.onButtonPressed(Button.A, function () {
    idx += -1
})
input.onButtonPressed(Button.B, function () {
    idx += 1
})
let idx = 1
basic.forever(function () {
    if (idx == 1) {
        basic.showString("A")
    } else if (idx == 2) {
        basic.showString("B")
    } else if (idx == 3) {
        basic.showString("C")
    } else if (idx == 4) {
        basic.showString("D")
    } else if (idx == 5) {
        basic.showString("E")
    } else if (idx == 6) {
        basic.showString("F")
    } else if (idx == 7) {
        basic.showString("G")
    } else if (idx == 8) {
        basic.showString("H")
    } else if (idx == 9) {
        basic.showString("I")
    } else if (idx == 10) {
        basic.showString("J")
    } else if (idx == 11) {
        basic.showString("K")
    } else if (idx == 12) {
        basic.showString("L")
    } else if (idx == 13) {
        basic.showString("M")
    } else if (idx == 14) {
        basic.showString("N")
    } else if (idx == 15) {
        basic.showString("O")
    } else if (idx == 16) {
        basic.showString("P")
    } else if (idx == 17) {
        basic.showString("Q")
    } else if (idx == 18) {
        basic.showString("R")
    } else if (idx == 19) {
        basic.showString("S")
    } else if (idx == 20) {
        basic.showString("T")
    } else if (idx == 21) {
        basic.showString("U")
    } else if (idx == 22) {
        basic.showString("V")
    } else if (idx == 23) {
        basic.showString("W")
    } else if (idx == 24) {
        basic.showString("X")
    } else if (idx == 25) {
        basic.showString("Y")
    } else if (idx == 26) {
        basic.showString("Z")
    } else if (idx < 1) {
        idx = 26
    } else {
        idx = 1
    }
})
